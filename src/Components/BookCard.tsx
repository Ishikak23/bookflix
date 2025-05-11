import React from "react";

import PlaceHolderImg from "../assets/book2.png";
interface BookCardInterface {
  title: string;
  author: string;
  cover_id: number;
}
const BookCard = (props: BookCardInterface) => {
  const { title, author, cover_id } = props;
  const coverImg = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : PlaceHolderImg;

  return (
    <div className="w-48 h-60 border-2 border-amber-700 rounded-xl p-2">
      <img src={coverImg} alt="book-img" className="w-44 h-40" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
