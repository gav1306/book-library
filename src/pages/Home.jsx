import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BookSection from "../components/ui/booksection";
import { MagnifyingGlassIcon, ReloadIcon } from "@radix-ui/react-icons";
import { getAllBooks } from "../services/books";
import { useEffect, useState } from "react";
import { BookOpen, CircleAlertIcon } from "lucide-react";

const Home = () => {
  const [books, setBooks] = useState(null);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = async () => {
    setIsLoading(true);
    setNotFound(false);
    const docs = await getAllBooks(search);
    if (!docs.length) {
      setNotFound(true);
    }
    setBooks(docs);
    setIsLoading(false);
  };

  return (
    <section className="flex flex-col gap-5 h-full">
      <div className="flex w-[500px]">
        <Input
          className="rounded-r-none"
          onChange={searchHandler}
          placeholder="Eg. Bridgerton"
        />
        <Button
          className="rounded-l-none"
          disabled={!search || isLoading}
          onClick={submitHandler}
        >
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}{" "}
          Search
        </Button>
      </div>
      {!books && !isLoading && (
        <div className="grid place-content-center grow">
          <MagnifyingGlassIcon className="w-36 h-36 m-auto animate-bounce" />
          <span className="text-xl italic text-primary text-center">
            Search for your books
          </span>
        </div>
      )}
      {isLoading && (
        <div className="grid place-content-center grow">
          <BookOpen className="w-36 h-36 m-auto animate-pulse" />
          <span className="text-xl italic text-primary text-center animate-pulse">
            Searching...
          </span>
        </div>
      )}
      {notFound && (
        <div className="grid place-content-center grow">
          <CircleAlertIcon className="w-36 h-36 m-auto" />
          <span className="text-xl italic text-primary text-center">
            No books found
          </span>
        </div>
      )}
      {books && !isLoading && <BookSection books={books} />}
    </section>
  );
};

export default Home;
