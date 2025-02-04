import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import loginLottieAnimation from "../../assets/login-lottie.json";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Login = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);

  // google sign in
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.log(err.message);
    }
  };

  // email, password sign in
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    console.log({ email, pass });

    try {
      signIn(email, pass);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(handleSignIn);

  return (
    <div className="hero min-h-screen bg-blue-50">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[300px]">
          <Lottie animationData={loginLottieAnimation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-xl">
          {/* login with google  */}
          <div className="mx-7 mt-6 ">
            <button
              onClick={handleGoogleSignIn}
              className="flex gap-4 py-2 cursor-pointer hover:bg-gray-50 transition-all justify-center items-center border-[1px] border-gray-300 rounded w-full"
            >
              {" "}
              <FcGoogle size={20} />{" "}
              <span className="font-base">Sign In With Google</span>
            </button>
          </div>

          <div className="divider mx-6 font-thin text-stone-800 mt-5 text-xs">
            OR LOGIN WITH EMAIL
          </div>

          {/* login with email & password */}
          <form onSubmit={handleSignIn} className="card-body pt-0">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-50 w-full">Login</button>
            </div>
          </form>

          {/* or sign up  */}
          <div className="divider mx-6 font-thin text-stone-800 mt-5 text-xs">
            <Link to="/register" className="hover:underline">
              OR SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
