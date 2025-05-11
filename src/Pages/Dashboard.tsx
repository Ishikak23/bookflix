import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/userContext";
import Header from "../Components/Header";
import BookList from "../Components/BookList";

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
      <div className="flex flex-col gap-2 p-4">
        <h2 className="font-bold text-2xl text-amber-800">Best-seller</h2>
        <BookList genre="bestsellers" />
        <h2 className="font-bold text-2xl text-amber-800">Romance</h2>
        <BookList genre="romance" />
        <h2 className="font-bold text-2xl text-amber-800">Thriller</h2>
        <BookList genre="thriller" />
        <h2 className="font-bold text-2xl text-amber-800">Science Fiction </h2>
        <BookList genre="science_fiction" />
        <h2 className="font-bold text-2xl text-amber-800">Mystery</h2>
        <BookList genre="mystery_and_detective_stories" />
        <h2 className="font-bold text-2xl text-amber-800">Young Adult</h2>
        <BookList genre="young_adult_fiction" />
        <h2 className="font-bold text-2xl text-amber-800">Horror</h2>
        <BookList genre="horror" />
      </div>
    </div>
  );
};

export default Dashboard;
