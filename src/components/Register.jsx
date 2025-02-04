import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { Navigate } from "react-router-dom";
import axios from 'axios';


class Register extends Component {
    state={
      name:'',
      email:'',
      password:'',
      password_confirmation:'',
      message:''
    }

    //Register form Submit
  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation:this.state.password_confirmation
       }

  axios.post('/register',data) 
   
  .then( (response)=> {
    localStorage.setItem('token',response.data.token);
    this.setState({
      loggedIn:true
    })
    this.props.setUser(response.data.user);
  })
  .catch( (error)=> {
    console.log(error); 
  })

  }
  render(){
  //After login redirect to the profile page
  if (this.state.loggedIn) {
    return <Navigate to="/user/profile" replace />;
  }

    return (
      <div>
     <div>
        <br></br>
        <br></br>
            <div class="row">
              <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
                <h3 class="text-center text-white">Register Account</h3>
                <form onSubmit={this.formSubmit}>

                <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white">User Name</label>
    <input type="text" class="form-control" name="name"  required onChange={(e)=>{
      this.setState({name:e.target.value})
    }}/>
    
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
    <input type="email" class="form-control"  name="email" required onChange={(e)=>{
      this.setState({email:e.target.value})
    }} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"   name="password" required onChange={(e)=>{
      this.setState({password:e.target.value})
    }}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password_confirmation"  required onChange={(e)=>{
      this.setState({password_confirmation:e.target.value})
    }}/>
  </div>
  
  <button type="submit" class="btn btn-primary w-100">Register</button>
  <br></br>   
  
  Have an Account Already?  <Link to="/login" class="bg-secondary">Login Here</Link>
  <br></br>  
  Forget My Password <Link to="/forget">Click Here</Link>
  
     
</form>
              </div>
            </div>
      </div>
      </div>
    )
  }
}


export default Register
