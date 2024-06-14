export const getAllBooks = async (search) => {
  const response = await fetch(
    `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`
  );
  const data = await response.json();
  return data.docs;
};

export const saveBook = (book) => {
  const savedBooks = localStorage.getItem("bookmark");
  if (savedBooks) {
    const savedBookList = JSON.parse(savedBooks);
    const isBookPresent = savedBookList.find((prevBook) => {
      if (prevBook.key === book.key) {
        return prevBook;
      }
    });
    if (!isBookPresent) {
      const newBooks = [...JSON.parse(savedBooks), book];
      localStorage.setItem("bookmark", JSON.stringify(newBooks));
    }
  } else {
    localStorage.setItem("bookmark", JSON.stringify([book]));
  }
};

export const getSavedBooks = () => {
  const savedBooks = localStorage.getItem("bookmark");
  if (!savedBooks) {
    return null;
  } else {
    return JSON.parse(savedBooks);
  }
};
