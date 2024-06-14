import React from "react";
import { useState } from "react";
import { getSavedBooks } from "../services/books";
import BookSection from "../components/ui/booksection";
import { CircleAlertIcon } from "lucide-react";

const Bookmark = () => {
  const [books] = useState(getSavedBooks());
  return (
    <section className="flex flex-col gap-5 h-full">
      {!books && (
        <div className="grid place-content-center grow">
          <CircleAlertIcon className="w-36 h-36 m-auto" />
          <span className="text-xl italic text-primary text-center">
            No books saved
          </span>
        </div>
      )}
      {books && <BookSection books={books} disabledBookmark={true} />}
    </section>
  );
};

export default Bookmark;
