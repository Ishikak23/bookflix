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
    <div className="bg-[#fdf6e3] w-48 h-60 shadow-lg shadow-[#fdf6e3]/30 rounded-xl p-2 flex-shrink-0 overflow-y-hidden">
      <img src={coverImg} alt="book-img" className="w-44 h-40" />
      <h3 className="p-1 text-base text-amber-900 font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </h3>
      <p className="text-base text-amber-800 whitespace-nowrap overflow-hidden text-ellipsis">
        - {author}
      </p>
    </div>
  );
};

export default BookCard;
