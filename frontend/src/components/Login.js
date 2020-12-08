import React, { useState } from "react";
import {login} from '../api/api'

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  function onChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      email: state.email,
      password: state.password,
    };

    login(user).then((res) => {
      console.log(res);
      if (res.status == "1") {
        window.location.href="/"
        setState({
          username: "",
          password: "",
        });
      } else {
        setError(true);
        setState({
          username: "",
          password: "",
        });
      }
    });
  }

  return (
    <div
      className="container-fluid login-div"
      style={{
        color: "#fff",
        height: "100vh",
        backgroundImage:
          "url(" +
          "https://b.zmtcdn.com/data/images/order/home_page_bg.jpg?output-format=webp" +
          ")",
        backgroundSize: "100% 100%"
      }}
    >
      <h4>LOGIN </h4>
      {error ? (<h2 style={{color:"red"}}>An error occured</h2>):(null)}
      <form
      onSubmit={onSubmit}
        class="ui form"
        style={{
          position: "relative",
          zIndex: "1",
          background: "#FFFFFF",
          maxWidth: "360px",
          margin: "0 auto 100px",
          padding: "45px",
          textAlign: "center",
          boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)"
            ,
        borderRadius:"24px"
        }}
      >
        <div class="field">
          <input
            placeholder="User Name"
            type="text"
            style={{
              fontFamily: '"Roboto", sans-serif',
              outline: "0",
              background: "#f2f2f2",
              width: "100%",
              border: "0",
              margin: "0 0 15px",
              padding: "15px",
              boxSizing: "border-box",
              fontSize: "14px",
            }}
            name="email"
            value={state.email}
            onChange={onChange}
          />
        </div>
        <div class="field">
          <input
            placeholder="Password"
            type="password"
            style={{
              fontFamily: '"Roboto", sans-serif',
              outline: "0",
              background: "#f2f2f2",
              width: "100%",
              border: "0",
              margin: "0 0 15px",
              padding: "15px",
              boxSizing: "border-box",
              fontSize: "14px",
            }}
            name="password"
            value={state.password}
            onChange={onChange}
          />
        </div>

        <button type="submit" class="ui button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
