import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { Navigate } from "react-router-dom";

 class Profile extends Component {
  render() {
    let email=''
    let name=''

    if(this.props.user){
      email=this.props.user.email
      name=this.props.user.name
    }

      

    return (
    
      <div>
        <br></br>
        <br></br>
            <div class="row">
              <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
                <h3 class="text-center text-white">User Profile</h3>
                <ul class="list-group list-group-flush fw-bold">
  <li class="list-group-item ">Name : {name}</li>
  <li class="list-group-item">Email : {email}</li>
  
</ul>
              </div>
            </div>
      </div>
    )
  }
}

export default Profile
