/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import BookDetailsCard from "../../components/BookDetailsCard";

const CategoriesDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const [books, setBooks] = useState({});

  useEffect(() => {
    fetchBooksData();
  }, [id]);

  const fetchBooksData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/booksCategory/${id}`
    );
    // console.log(data);
    setBooks(data);
  };

  console.log(books);

  return (
    <>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* categories details */}
      <div className="container mx-auto">
        <h1 className="font-bold text-5xl mt-6">{books.category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
          {books?.books?.map((bDetails) => (
            <BookDetailsCard key={bDetails._id} bDetails={bDetails} />
          ))}
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CategoriesDetails;
