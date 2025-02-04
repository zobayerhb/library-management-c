import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useState(AuthContext);
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const pass = form.password.value;

    console.log({ name, email, photo, pass });

    try {
      await createUser(email, pass);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(handleCreateUser);
  return (
    <div>
      <h1>Register.jsx</h1>
    </div>
  );
};

export default Register;
