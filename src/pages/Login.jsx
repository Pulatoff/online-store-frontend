import { useRef } from "react";
import axios from "axios";
import React from "react";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandle = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = await axios.post(
      "http://localhost:8000/api/v1/users/signin",
      {
        email,
        password,
      }
    );
    console.log(response);
  };

  return (
    <div>
      <form action="/" className="form">
        <h1 className="form__title">Enter to account</h1>
        <label htmlFor="email">Email</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          required
          placeholder="email"
        />
        <label htmlFor="password">Password</label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          required
          id="password"
        />
        <button onClick={submitHandle} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
