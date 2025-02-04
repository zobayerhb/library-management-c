import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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

  console.log(handleGoogleSignIn);

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
    <div>
      <button>Login with Google</button>
    </div>
  );
};

export default Login;
