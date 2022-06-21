import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Nav from "../../components/Nav/Nav";
import "./Profilescreen.css";
import { signOut } from "firebase/auth";
import {auth} from "../../firebase"
import Plans from "../../components/Plans/Plans";




const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = ()=>{
    signOut(auth)
  }
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
            alt="avatar"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <Plans/>
              <button className="profileScreen_signOut" onClick={logout}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
