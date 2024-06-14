import React from "react";
import { LibraryBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-primary absolute w-full top-0 z-50">
      <nav className="container flex items-center justify-between p-3 max-w-screen-2x1">
        <LibraryBig className="w-16 h-16" />
        <div>
          {location.pathname === "/bookmarks" && (
            <Button asChild variant="outline">
              <Link to="/">All Books</Link>
            </Button>
          )}
          {location.pathname === "/" && (
            <Button asChild variant="outline">
              <Link to="/bookmarks">My Books</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
