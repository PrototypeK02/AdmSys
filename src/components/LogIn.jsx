import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const signIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const LogIn = () => {
  return <GoogleButton onClick={signIn} className="google" />;
};

export default LogIn;
