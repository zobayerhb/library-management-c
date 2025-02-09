import { Link } from "react-router";
/* eslint-disable react/prop-types */
const Slide = ({ img, title }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[30rem]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex justify-center items-center text-center w-full h-full bg-gray-900/60">
        <div>
          <div>
            <h2 className="text-6xl text-white font-semibold">{title}</h2>
            <p className="max-w-2xl text-gray-400 py-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius vel
              harum fugit nam vero officiis perferendis quas possimus itaque,
              corporis rem quod magni adipisci. Nobis, architecto. Nemo
              excepturi vel voluptatum minima, reprehenderit alias officia saepe
              quam similique expedita id ab voluptatem vitae et illum dolore
              facere, neque quasi, aspernatur explicabo!
            </p>
          </div>
          <div>
            <button className="btn">
              <Link to="/all-books" className="textarea-md">
                Visit All Books
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
