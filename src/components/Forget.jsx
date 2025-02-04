import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

 class Forget extends Component {
  state={
    email:'',
    message:''
  }

   //Forget form Submit
   formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email
       }

  axios.post('/forgetpassword',data) 
   
  .then( (response)=> {
   this.setState({message:response.data.message})
   document.getElementById("forgerreset").reset();
  })
  .catch( (error)=> {
    this.setState({message:error.response.data.message})

  })
 
  }
  render() {

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
         <div>
     <div>
        <br></br>
        <br></br>
            <div class="row">
              <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
                <h3 class="text-center text-white">Forget Password</h3>
                <form onSubmit={this.formSubmit} id="forgerreset">

             {error}

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
    <input type="email" class="form-control" name="email" required onChange={(e)=>{
      this.setState({email:e.target.value})
    }}/>
    
  </div>
  
  <button type="submit" class="btn btn-primary w-100">Forget Password</button>
  <br></br>   
  
  Have an Account?  <Link to="/login" class="bg-secondary">Login Here</Link>
  <br></br>  
 Don't Have Account? <Link to="/register">Register Here</Link>
  
     
</form>
              </div>
            </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Forget
