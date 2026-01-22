import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/userContext";
import Header from "../Components/Header";
import ContentSection from "../Components/ContentSection";
import HeroSection from "../Components/HeroSection";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUserContext() || {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      } else {
        setLoggedInUser?.(undefined);
        navigate("/");
      }
    });
    // unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ContentSection />
    </div>
  );
};

export default Dashboard;
