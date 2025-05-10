import React, { useState, useRef } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import BookBackground from "../assets/books-bg.png";
import { auth } from "../utils/firebaseConfig";

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLoginToggle = () => {
    setIsLogin(!isLogin);
  };

  const createNewUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logged in user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, ":", errorMessage);
      });
  };

  const login = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameRef?.current?.value,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, ":", errorMessage);
      });
  };

  const handleUserAuth = () => {
    if (emailRef.current && passwordRef.current) {
      const email = emailRef?.current?.value;
      const password = passwordRef?.current?.value;
      if (isLogin) {
        login(email, password);
      } else {
        createNewUser(email, password);
      }
    }
  };

  return (
    <div>
      <img src={BookBackground} alt="logo" className="w-screen h-screen" />
      <div className="absolute top-0 left-0 w-full h-full">
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to Book Haven
        </h1>
        <p className="text-lg text-center text-white mt-2">
          Your one-stop destination for all things books!
        </p>

        <div className="flex border-2 border-white rounded-lg p-4 mt-16 w-1/3 mx-auto bg-amber-50/80 ">
          <form
            className="flex flex-col gap-1 h-full w-full"
            onSubmit={(event) => event.preventDefault()}
          >
            {!isLogin && (
              <>
                <label className="text-amber-950 font-bold" htmlFor="name">
                  Name
                </label>
                <input
                  className="text-amber-950 font-bold bg-amber-50 rounded-lg h-8 p-2"
                  name="name"
                  ref={nameRef}
                />
              </>
            )}
            <label className="text-amber-950 font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="text-amber-950 font-bold bg-amber-50 rounded-lg h-8 p-2"
              name="email"
              type="email"
              ref={emailRef}
            />

            <label className="text-amber-950 font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="text-amber-950 font-bold bg-amber-50 rounded-lg h-8 p-2"
              name="password"
              ref={passwordRef}
              type="password"
            />
            <button
              className="bg-amber-800 text-amber-50 ml-auto mr-auto rounded-xl w-fit py-1 px-2.5 mt-2 cursor-pointer"
              onClick={handleUserAuth}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
            {isLogin && (
              <p className="text-center text-amber-950 font-bold mt-2">
                Don't have an account?&nbsp;
                <button
                  className="text-amber-800 font-bold border-0 cursor-pointer"
                  type="button"
                  onClick={handleLoginToggle}
                >
                  Register
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
