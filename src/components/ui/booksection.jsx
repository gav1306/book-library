import React from "react";
import BookCard from "./bookcard";

const BookSection = ({ books, disabledBookmark }) => {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {books.map((book) => {
        return (
          <BookCard
            key={book.key}
            book={book}
            disabledBookmark={disabledBookmark}
          />
        );
      })}
    </section>
  );
};

export default BookSection;
