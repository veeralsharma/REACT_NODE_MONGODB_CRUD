import React from "react";
import RestaurantCard from "./RestaurantCard";

function Help() {
  return (
    <div class="container-fluid" style={{ margin: "0", padding: "0" }}>
      <div
        class="searchbar"
        style={{
          marginBottom: "2em",
          color: "#fff",
          backgroundImage:
            "url('https://b.zmtcdn.com/webFrontend/8015dbe54fd3659cc0366c1cc77f664c1601890512.jpeg?output-format=webp')",
          backgroundSize: "100% 	100%",
          width: "100%",
          height: "40vh",
        }}
      >
        <div class="findcuisine" style={{ paddingTop: "10%" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 800 }}>
            We are here for you !
          </h1>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a href="/" style={{textDecoration:"none",color:"black"}}>
        <div class=" cuisines" style={{ textAlign: "center" }}>
          <div
            class="ui card"
            style={{
              display: "inline-block",
              margin: "20px",
              width: "60%",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <div style={{ margin: "20px 0" }}>
              <div class="extra content">
                <h4>Report a Safety Emergency</h4>
              </div>
              <div class="extra content">
                <p>We are committed to the safety of everyone using Zomato.</p>
              </div>
            </div>
          </div>
        </div>
        </a>
        <a href="/" style={{textDecoration:"none",color:"black"}}>
        <div class=" cuisines" style={{ textAlign: "center" }}>
          <div
            class="ui card"
            style={{
              display: "inline-block",
              margin: "20px",
              width: "50%",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <div style={{ margin: "20px 0" }}>
              <div class="extra content">
                <h4>Issue with your order?</h4>
              </div>
              <div class="extra content">
                <p>
                  Click on the 'Support' or 'Online ordering help' section in
                  your app to connect to our customer support team.
                </p>
              </div>
            </div>
          </div>
        </div>
        </a>
        <a href="/" style={{textDecoration:"none",color:"black"}}>
        <div class=" cuisines" style={{ textAlign: "center" }}>
          <div
            class="ui card"
            style={{
              display: "inline-block",
              margin: "20px",
              width: "50%",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <div style={{ margin: "20px 0" }}>
              <div class="extra content">
                <h4>Request a service</h4>
              </div>
              <div class="extra content">
                <p>
                  We are committed ask what you need and we will get back to
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
      <div style={{ padding: "20px" }}>
        <select
          class="form-control form-control-lg"
          style={{ width: "50%", marginLeft: "25%" }}
        >
          <option>How Can we Help You ?</option>
        </select>
      </div>
      <h1 style={{fontWeight:"400"}}>Reach Out to us </h1>
      <form style={{width:"30%",margin:"20px 35%",backgroundColor:"white",borderRadius:"12px",padding:"20px"}}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contact</label>
    <input type="tel" class="form-control" id="exampleInputPassword1" placeholder="your mobile number" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Question</label>
    <textarea type="text" class="form-control" id="exampleInputPassword1"  />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
}

export default Help;
