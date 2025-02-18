/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetailsPage = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchDetailsData();
  }, [id]);

  const fetchDetailsData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/book-details/${id}`
    );
    setDetails(data);
    // console.log(data);
  };
  console.log(details);

  return (
    <>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* details */}
      <div></div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default BookDetailsPage;
