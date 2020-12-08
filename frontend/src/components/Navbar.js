import React,{Component, Fragment} from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">COOK-BOOK</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/help">Help </a>
            </li>
            {localStorage.usertoken ? (<li class="nav-item">
              <a class="nav-link" href="/profile">Profile</a>
            </li>) : (<Fragment>
              <li class="nav-item ">
              <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/signup">SignUp</a>
            </li>
            </Fragment>)}            
          </ul>
          
        </div>
      </nav>
    )
}

export default Navbar
