import React, { useEffect, useState } from "react";

import BookCard from "./BookCard";

export type BookInterface = {
  title: string;
  authors: Record<string, unknown>[];
  cover_id: number;
};

export interface BookListInterface {
  genre: string;
}

const BookList = (props: BookListInterface) => {
  const { genre } = props;
  const [bookListData, setBookListData] = useState<BookInterface[]>([]);
  const getBookList = async () => {
    const data = await fetch(`https://openlibrary.org/subjects/${genre}.json`);
    const bookData = await data.json();
    setBookListData(bookData.works);
  };

  useEffect(() => {
    getBookList();
  }, []);

  console.log("bookListData", bookListData);

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {bookListData?.map((book) => {
        const name = book.title;
        const author = book.authors[0]?.name as string;
        const coverID = book.cover_id;
        return <BookCard title={name} author={author} cover_id={coverID} />;
      })}
    </div>
  );
};

export default BookList;
