import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import axios from 'axios';

 class Login extends Component {
  
  state={
    email:'',
    password:'',
    message:''
  }
  //Login form Submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    
       }

       axios.post('/login', data)
       .then((response) => {
         console.log("Full Response:", response); // Debugging - Check the response structure
     
         if (response && response.data) { // Ensure response and response.data exist
           localStorage.setItem('token', response.data.token);
           this.setState({ loggedIn: true });
     
           if (response.data.user) {
             this.props.setUser(response.data.user);
           } else {
             console.error("User data is missing in response:", response);
           }
         } else {
           console.error("Unexpected response structure:", response);
         }
       })
       .catch((error) => {
         console.error("Login Error:", error);
     
         if (error.response && error.response.data) {
           this.setState({ message: error.response.data.message });
         } else {
           this.setState({ message: "An unexpected error occurred." });
         }
       });
     
 
  }
  render() {

    //After login redirect to the profile page
    if (this.state.loggedIn) {
      return <Navigate to="/user/profile" replace />;
    }

    let error=""

    if(this.state.message){
      error=(
        <div>
          <div class="alert alert-danger"  role="alert">{this.state.message} </div>
        </div>
      )
    }
    return (
      <div>
        <br></br>
        <br></br>
            <div class="row">
              <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
                <h3 class="text-center text-white">Login Account</h3>
                <form onSubmit={this.formSubmit}>
                  {error}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
    <input type="email" class="form-control" name="email" required onChange={(e)=>{
      this.setState({email:e.target.value})
    }}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
    <input type="password" class="form-control" name="password"  required onChange={(e)=>{
      this.setState({password:e.target.value})
    }}/>
  </div>
  
  <button type="submit" class="btn btn-primary w-100">Login</button>
  <br></br>
        
  Forget My Password <Link to="/forget">Click Here</Link>
</form>
              </div>
            </div>
      </div>
    )
  }
}

export default Login
