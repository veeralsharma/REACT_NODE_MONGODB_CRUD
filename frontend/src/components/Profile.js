import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { getUser } from "../api/api";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    var decoded = jwt_decode(localStorage.usertoken);
    setUser({
      ...user,
      user_id: decoded._id,
    });
    async function setData() {
      await getUser(decoded._id,localStorage.usertoken).then((res) => {
        setUser(res.msg);
      });
    }
    setData();
  }, []);

  function logout() {
    localStorage.removeItem("usertoken");
    window.location.href = "/";
  }

  return (
    <div>
      {localStorage.usertoken ? (
        <div
          class="container-fluid"
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
          <h4>My Profile</h4>
          <div
          class="ui card"
          style={{ display: "inline-block", margin: "20px" ,width:"20%" , borderRadius:"24px"}}
        >

         <div style={{margin:"20px 0"}}>
         <div class="extra content">
            <h4 style={{color:"black"}}>{user.name}</h4>
          </div>
          <div class="extra content">
            <p style={{color:"black"}}>{user.email}</p>
          </div>
         </div>
        </div>
          <div>
            <button
              className="btn btn-lg btn-danger"
              style={{ margin: "20px" }}
              onClick={logout}
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        (window.location.href = "/login")
      )}
    </div>
  );
}

export default Profile;
