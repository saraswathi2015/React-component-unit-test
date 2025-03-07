import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    setMessage("Loading....");
    if (email === "abc@gmail.com" && password === "test") {
      setTimeout(() => {
        setMessage("sucessfully submitted");
      }, 2000);
    } else {
      setTimeout(() => {
        setMessage("wrong email");
      }, 2000);
    }
  }
  console.log("email", email);
  console.log("password", password);
  console.log("message", message);

  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <h1>Login</h1>
      <input
        type="text"
        placeholder="enter ur email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="enter ur password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
      {message && <p>{message}</p>}
      {/* </form> */}
    </div>
  );
};

export default Login;
