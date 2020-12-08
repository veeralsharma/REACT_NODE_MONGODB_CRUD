import React, { useState } from "react";
import {register} from '../api/api'

function SignUp() {

  const [state,setState]=useState({
    name: '',
    email: '',
    password: ''
})
const [error, setError] = useState(false);


const onChange = (e) =>{
  setState({
      ...state,
     [e.target.name] : e.target.value
     })
}


const onSubmit = async e =>{
  e.preventDefault()

  const newUser = {
    name: state.name,
    email: state.email,
    password: state.password
  }

  register(newUser).then(res => {
    if(res.status === "1"){
      window.location.href="/"
    }else{
      setError(true);
      setState({
        name: '',
        email: '',
        password: ''
    })
    }
  })

}
  return (
    <div
      className="container-fluid signup-div"
      style={{
        color: "#fff",
        height: "100vh",
        backgroundImage:
          "url(" +
          "https://b.zmtcdn.com/data/images/order/home_page_bg.jpg?output-format=webp" +
          ")",
        backgroundSize: "100% 100%",
      }}
    >
      <h4>REGISTER HERE </h4>
      {error ? (<h2 style={{color:"red"}}>An error occured</h2>):(null)}
      <form
        class="ui form"
        onSubmit={onSubmit}
        style={{
          position: "relative",
          zIndex: "1",
          background: "#FFFFFF",
          maxWidth: "360px",
          margin: "0 auto 100px",
          padding: "45px",
          textAlign: "center",
          boxShadow:
            "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        borderRadius:"24px"
        }}
      >
        <div class="field">
          <input
            placeholder=" Name"
            name="name"
            value={state.name}
            onChange={onChange}
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
          />
        </div>
        <div class="field">
          <input
            placeholder="email "
            type="email"
            name="email"
            value={state.email}
            onChange={onChange}
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
          />
        </div>
        <div class="field">
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={state.password}
            onChange={onChange}
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
          />
        </div>
        <button type="submit" class="ui button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
