import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { saveBook } from "../../services/books";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return <div className="flex gap-1">{stars}</div>;
};

const BookCard = ({ book, disabledBookmark }) => {
  const author = book.author_name[0];
  const edition = book.edition_count;
  const title = book.title;
  const cover = book.isbn?.[0];
  const rating = Math.floor(book.ratings_average);
  return (
    <Card className=" px-0 overflow-hidden relative">
      <Avatar className="object-cover w-full h-[250px] rounded-none">
        <AvatarImage
          src={`https://covers.openlibrary.org/b/isbn/${cover}-M.jpg`}
        />
        <AvatarFallback className="rounded-none text-center">{`${title}-cover`}</AvatarFallback>
      </Avatar>
      <CardHeader className="p-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <CardDescription className="grid gap-2">
          <div className="flex justify-between">
            <span>{author}</span>
            <span className="italic">Edition :{edition}</span>
          </div>
          <StarRating rating={rating} />
        </CardDescription>
        {!disabledBookmark && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2  z-10"
            onClick={() => {
              saveBook(book);
            }}
          >
            <Heart color="#fff" strokeWidth={0.75} fill="#e11d48" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BookCard;
