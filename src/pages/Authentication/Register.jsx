import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import loginLottieAnimation from "../../assets/login-lottie.json";
import Navbar from "../../components/Navbar";
import toast from "react-hot-toast";
import Footer from "../../components/Footer";

const Register = () => {
  const { createUser, updateUserProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.table({ name, email, photo, password });

    //  create user
    try {
      const result = await createUser(email, password);
      await updateUserProfile(name, photo);
      toast.success("Register Successfull");
      setUser({ ...result.user, photoURL: photo, displayName: name });
      navigate("/");
    } catch (error) {
      toast.error(error.code);
    }
  };

  // create user with google sign in
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      toast.success("User Successfully Sign Up");
      navigate("/");
    } catch (err) {
      // console.log(err.message);
      toast.error(err.code);
    }
  };

  console.log(handleRegisterUser);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="hero min-h-screen bg-blue-50 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 max-w-sm w-lg shrink-0 shadow-xl">
            {/* login with google  */}
            <div className="mx-7 mt-6">
              <button
                onClick={handleGoogleSignUp}
                className="flex gap-4 py-2 cursor-pointer hover:bg-gray-50 transition-all justify-center items-center border-[1px] border-gray-300 rounded w-full"
              >
                {" "}
                <FcGoogle size={20} />{" "}
                <span className="font-base">Sign In With Google</span>
              </button>
            </div>

            <div className="divider mx-6 font-thin text-stone-800 mt-5 text-xs">
              OR REGISTER
            </div>

            {/* register with name, photo, email & password */}
            <form onSubmit={handleRegisterUser} className="card-body pt-0">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered focus:outline-0"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  name="photo"
                  className="input input-bordered focus:outline-0"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered focus:outline-0"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered focus:outline-0"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-50 w-full">Register Now</button>
              </div>
            </form>

            {/* or sign up  */}
            <div className="divider mx-6 font-thin text-stone-800 mt-5 text-xs">
              <Link to="/login" className="hover:underline">
                OR SIGN IN
              </Link>
            </div>
          </div>
          <div className="text-center lg:text-left w-[500px]">
            <Lottie animationData={loginLottieAnimation} loop={true}></Lottie>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
