import React from "react";
import BookList from "./BookList";

const ContentSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-6">
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
  );
};

export default ContentSection;
