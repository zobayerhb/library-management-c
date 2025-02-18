import { Link } from "react-router";

/* eslint-disable react/prop-types */
const BookDetailsCard = ({ bDetails }) => {
  const { image, name, author, id } = bDetails || {};
  console.log(bDetails);
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure>
        <img className="w-[200px] pt-3" src={image} alt="Books" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span>{author}</span>
        <div className="">
          <Link
            to={`/bookDetails/${id}`}
            className="btn bg-blue-500 w-full text-base text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
