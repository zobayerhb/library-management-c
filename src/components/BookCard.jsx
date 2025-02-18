import { Link } from "react-router";

/* eslint-disable react/prop-types */
const BookCard = ({ book }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body px-5 pb-4">
        <Link
          to={`/categoriesDetails/${book._id}`}
          className="card-title font-bold text-[22px] text-blue-500"
        >
          {book.category}
        </Link>
        <div className="flex flex-col">
          {book?.books?.map((sBook, index) => (
            <Link
              key={index}
              className="hover:underline hover:text-blue-500 transition-all font-medium text-base"
            >
              {index + 1}/ {sBook.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
