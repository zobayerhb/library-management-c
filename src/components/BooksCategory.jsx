import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";

const BooksCategory = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooksCategory();
  }, []);

  // fetch All books Category
  const fetchBooksCategory = async () => {
    const { data } = await axios.get("http://localhost:5000/books");
    setBooks(data);
  };
  console.log(books);

  return (
    <>
      <div className="container mx-auto">
        {/* category */}
        <div>
          <h3 className="text-center font-bold text-4xl underline">
            All Books Category
          </h3>
        </div>
        {/* books category card */}
        <div>
          <h1>Books length {books.length}</h1>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCategory;
