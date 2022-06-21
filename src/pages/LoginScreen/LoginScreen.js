import React, { useState } from "react";
import SignInScreen from "../SignInScreen/SignInScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen-background">
        <img
          className="loginScreen-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        />
        <button
          className="loginScreen-button"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>

        <div className="loginScreen-gradient">

        </div>
        <div className="loginScreen-body">
            {
                signIn ? (
                    <SignInScreen/>
                ) : (
                    <>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen-input">
                        <form>
                            <input type="email" placeholder="Email Address"/>
                            <button className="loginScreen_getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                        </form>
                    </div>
                    </>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;



//
//Watch anywhere. Cancel anytime.
//