import React from "react";
import RestaurantCard from "./RestaurantCard";

function Home() {

 
  return (
    <div class="container-fluid" style={{ margin: "0", padding: "0" }}>
      <div
        class="searchbar"
        style={{
          marginBottom: "2em",
          color: "#fff",
          backgroundImage:
            "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",
          backgroundSize: "100% 	100%",
          width: "100%",
          height: "60vh",
        }}
      >
        <div class="findcuisine" style={{ paddingTop: "10%" }}>
          <h1><i>COOKBOOK</i></h1>
          <h5>Discover the best food & drinks in Delhi NCR</h5>
          <form >
            <input
              type="text"
              placeholder="search restaurant"
              style={{
                padding: "5px",
                margin: "20px",
                width: "300px",
                borderRadius:"24px"
              }}
            />
            <button className="btn btn-primary" type="submit">
              Go
            </button>
          </form>
        </div>
      </div>
      <div class=" cuisines" style={{ textAlign: "center" }}>
        <RestaurantCard 
         name="Farzi Cafe"
         url="https://b.zmtcdn.com/data/res_imagery/18233593_RESTAURANT_00272acd0235af309a0bbe4843e53499.jpg?fit=around%7C450%3A450&crop=450%3A450%3B0%2C0"
         price="2500 for two"
         cuisine="Modern Indian , Bar Food , North Indian"
        />
        <RestaurantCard 
         name="Local"
         url="https://b.zmtcdn.com/data/pictures/0/18382360/e573a272f5e7b1d7b40a5eb6da62f562.jpg?fit=around%7C450%3A450&crop=450%3A450%3B38%2C268"
         price="1600 for two"
         cuisine="Continental , Street Foor , North Indian"
        />
        <RestaurantCard 
         name="Unplugged courtyard"
         url="https://b.zmtcdn.com/data/pictures/1/18216901/e118f1bf9d6af576a4a3439044ce9f18.jpg?fit=around%7C450%3A450&crop=450%3A450%3B1%2C17"
         price="1600 for two"
         cuisine="Italian ,snacks , North Indian"
        />
        <RestaurantCard 
         name="My Bar"
         url="https://b.zmtcdn.com/data/pictures/4/304154/8c9aa95ad8565d2664b1ecddef3da35b.jpg?fit=around%7C450%3A450&crop=450%3A450%3B5%2C328"
         price="1400 for two"
         cuisine="Chinese , Bar Food , North Indian"
        />
      </div>
    </div>
  );
}

export default Home;
