import React from 'react'

function RestaurantCard({url,name,price,cuisine}) {

    function gotorecipe(id){
        var link="/dishListing"+id
        window.location.href=link
      }
    return (
        <div
          class="ui card"
          style={{ display: "inline-block", margin: "20px" ,width:"20%" , borderRadius:"24px"}}
        >
          <div className="content shimmer-parent">
            <img
              className="shimmer"
              src={url}
              style={{ width: "100%", height: "200px", borderTopLeftRadius:"24px",borderTopRightRadius:"24px" }}
            />
          </div>
         <div style={{margin:"20px 0"}}>
         <div class="extra content">
            <h4>{name}</h4>
          </div>
          <div class="extra content">
            <p>{cuisine}</p>
          </div>
          <div class="extra content">
            <p>{price}</p>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",padding:"0 40px"}}>
              <a href="/restaurant/id" style={{textDecoration:"none"}}>View Outlet</a>
              <a href="/restaurant/id" style={{textDecoration:"none"}}>Book Table</a>
          </div>
         </div>
        </div>
    )
}

export default RestaurantCard
