import { collection, getDocs, query, where } from "firebase/firestore";
import { Collection } from "mongoose";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import "./Plans.css";

const Plans = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "products"), where("active", "==", true));
      const querySnapshot = await getDocs(q);
      const products = {};

      querySnapshot.forEach(async (doc) => {
        products[doc.id] = doc.data();

        const priceQuery = query(Collection(doc.ref, "prices"));

        const priceSnap = await getDocs(priceQuery);

        priceSnap.docs.forEach((priceDoc) => {
          products[doc.id].prices = {
            priceId: priceDoc.id,
            priceData: priceDoc.data(),
          };
        });
      });
      setProducts(products);
    };
    fetchData();
  }, []);
  console.log(products)
  return <div className="plans">
      <br/>
      {
          Object.entries(products).map(([productId,productData])=>{
              return(
                  <div key={productId}>
                      <div className="plansScreen_info">
                          <h5>{productData.name}</h5>
                          <h6>{productData.description}</h6>
                      </div>
                      <button>Subscribe</button>
                  </div>
              )
          })
      }
  </div>;
};

export default Plans;
