/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

import BookCard from "./BookCard";

export type BookInterface = {
  title: string;
  authors: Record<string, unknown>[];
  cover_id: number;
};

export interface BookListInterface {
  genre: string;
}

const BookList: React.FC<BookListInterface> = (props: BookListInterface) => {
  const { genre } = props;
  const [bookListData, setBookListData] = useState<BookInterface[]>([]);
  const [clientWidth, setClientWidth] = useState<number>(0);
  const [scrollWidth, setScrollWidth] = useState<number>(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const getBookList = async () => {
    const data = await fetch(`https://openlibrary.org/subjects/${genre}.json`);
    const bookData = await data.json();
    setBookListData(bookData.works);
  };

  useEffect(() => {
    getBookList();
  }, []);

  const bookListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookListRef.current) {
      setClientWidth(bookListRef.current.clientWidth);
      setScrollWidth(bookListRef.current.scrollWidth);
      if (bookListRef.current.scrollWidth > bookListRef.current.clientWidth) {
        setShowRightArrow(true);
      }
    }
  }, [bookListData]);

  const handleScroll = () => {
    let scrollLeft;
    if (bookListRef.current) {
      scrollLeft = bookListRef.current.scrollLeft;
      if (scrollLeft > 16) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }
      if (
        scrollWidth > clientWidth &&
        scrollLeft == scrollWidth - clientWidth
      ) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    }
  };

  return (
    <div
      ref={bookListRef}
      className="flex flex-row gap-5 overflow-x-auto p-3"
      onScroll={handleScroll}
    >
      {showLeftArrow && (
        <p className="w-8 h-8 rounded-full bg-amber-100/80 absolute left-9 mt-24 text-white text-xl font-bold flex items-center justify-center">
          &lt;
        </p>
      )}
      {bookListData?.map((book) => {
        const name = book.title;
        const author = book.authors[0]?.name as string;
        const coverID = book.cover_id;
        return <BookCard title={name} author={author} cover_id={coverID} />;
      })}
      {showRightArrow && (
        <p className="w-8 h-8 rounded-full bg-amber-100/80 absolute right-9 mt-24 text-white text-xl font-bold flex items-center justify-center">
          &gt;
        </p>
      )}
    </div>
  );
};

export default BookList;
