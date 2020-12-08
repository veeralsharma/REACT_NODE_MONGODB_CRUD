import React from "react";

function RestaurantPage() {
  return (
    <div
      className="restaurant-div"
      style={{ width: "70%", borderRadius: "12px", backgroundColor: "white" }}
    >
      <div className="shimmer-parent">
        <img
        className="shimmer2"
          src="https://b.zmtcdn.com/data/pictures/8/18454488/18529e4f622485a316903afe8f37b426.jpg?fit=around|1029:555&crop=1029:555;*,*"
          style={{ width: "60%", height: "400px", margin: "5px" }}
        />
        <img
        className="shimmer2"
          src="https://b.zmtcdn.com/data/pictures/chains/8/18454488/778de0d16d9206b2e6fd78b94a3f8b20.jpg?fit=around|300:273&crop=300:273;*,*"
          style={{ width: "36%", height: "400px", margin: "5px" }}
        />
      </div>
      <div style={{ textAlign: "left", padding: "10px" }}>
        <div style={{display:"inline-block"}}>
          <h1>The GT Road</h1>
          <h5 style={{ fontWeight: "200" }}>
            North Indian , Continental ,Mughlai
          </h5>
        </div>
        <div style={{display:"inline-block",marginLeft:"50%"}}>
        <h3>4 stars</h3>
        <svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{margin:"10px"}}> 
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg  style={{margin:"10px"}} width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg  style={{margin:"10px"}} width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg  style={{margin:"10px"}} width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        </div>
        <div></div>
      </div>
      <div style={{ textAlign: "left", padding: "10px" }}>
        <h6 style={{ fontWeight: "200" }}>Connaught Place</h6>
        <h6 style={{ fontWeight: "200" }}>Timings : 12PM - 10PM</h6>
      </div>
      <div style={{ textAlign: "left", padding: "10px" }}>
        <h4 style={{ color: "red" }}>Overview</h4>
        <hr />
      </div>
      <div style={{ textAlign: "left", padding: "10px",display:"flex",justifyContent:"space-evenly" }}>
        <div style={{left:"0", padding:"10px"}}>
        <h2 style={{ fontWeight: 300 }}>About The Restaurant</h2>
        <h4 style={{margin:"10px 0"}}>Known For </h4>
        <p>The restaurant uses Bamboo and Copper straws as eco-friendly alternatives.</p>
        <h4 style={{margin:"10px 0"}}>Popular Dishes </h4>
        <p>Crab Cake, Massaman Curry, Avocado Salad, Scallops, Crispy Prawns, Lamb Chops</p>
        <h4 style={{margin:"10px 0"}}>Average Cost </h4>
        <p>₹1,800 for two people (approx.) Without alcohol</p>
        <h4 style={{margin:"10px 0"}}>More Info </h4>
        <ul style={{listStyle:"none"}}>
            <li ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"5px"}}>
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>Delivery</li>
<li ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"5px"}}>
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>Live Sports Screening</li>
<li ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"5px"}}>
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>Live Music</li>
<li ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginRight:"5px"}}>
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
</svg>Buffet</li>
        </ul>
        </div>
        <div style={{width:"300px",padding:"10px",borderRadius:"12px",boxShadow:" 0 7px 30px -10px rgba(150,170,180,0.5)"}}> 
            <h2 style={{ fontWeight: 300 }}>Call</h2>
            <a href="/">+91-9212312312</a>
            <h2 style={{ fontWeight: 300 }}>Directon</h2>
            <img style={{width:"100%",height:"200px",display:"block"}}
            src="https://maps.zomato.com/php/staticmap?center=28.5256388380,77.1841974556&maptype=zomato&markers=28.5256388380,77.1841974556,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250" />
            <p>6/4, Kalka Das Marg, Near Qutub Minar, Mehrauli, New Delhi</p>
        </div>
      </div>
      <div style={{ textAlign: "left", padding: "20px" }} className="shimmer-parent">
      <h2 style={{ fontWeight: 300 }}>Gallery</h2>
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/3034a2a822772ae26f2894fb93764d8c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/6443b8f44de47aa0f5abcc6e6a157e13.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/25936491b1fd0f471374796bbaea32b8.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/434adca418d648c0562cb0b0f4c4dd33.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/fd4a39b0e8fb86c78b64f0571732313f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/575e6aee83b32b50d3af1788ece56d69.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/6b6c76b3432747783e266f0430877b13.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/e8ef543943b298a6be7bdb1f58f83452.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/540ef0cc2b0196f39d46b80f05325e06.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/90df3c7da2bf61b19433ed86b78aa20c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/chains/0/18966900/46afee2ab87c5e290c0b616d74795015.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/f54faa6ca832723fc5b98c12df725c96.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
        <img className="shimmer" src="https://b.zmtcdn.com/data/pictures/0/18966900/3f494b877dec1d8e4b84dfcfc4d3f76d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" style={{width:"200px",height:"200px",margin:"15px",borderRadius:"10px"}} />
      </div>
    </div>
  );
}

export default RestaurantPage;
