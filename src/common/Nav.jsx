import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';


class Nav extends Component {
  state={
    loggedOut:''
  }
  logout=()=>{
    localStorage.clear();
    this.props.setUser(null);
  }
  render() {
  

      let button;
      let profile;
      if(localStorage.getItem('token')){
        button=(
          <div>
            <Link class="navbar-brand" to="/"  onClick={this.logout}>Logout</Link>
          </div>
        )
        profile=(
          <div>
         <Link class="nav-link active" to="/user/profile">Profile</Link>

        </div>
        )
      }else{
        button=(
          <div>
      
      <Link class="navbar-brand" to="/login">Login</Link>
      <Link class="navbar-brand" to="/register">Register</Link>
     
          </div>
        )
      }

    
    return (
      <div class="p-3 mb-2 bg-black text-white">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Learning Hub</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
              {profile}
        </li>
        
      </ul>
       <span class="navbar-text">
       {button}
      {/* <Link class="navbar-brand" to="/login">Login</Link>
      <Link class="navbar-brand" to="/register">Register</Link> */}
      </span> 
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Nav
