// import React, { Component } from 'react';
// import Nav from './Nav';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from '../components/Home';
// import Login from '../components/Login'
// import Register from '../components/Register'
// import Profile from '../components/Profile'
// import Forget from '../components/Forget'
// import Reset from '../components/Reset'
// import axios from 'axios';

// class Header extends Component {
//   state={
//     user:{}
//   }

//   ccomponentDidMount() {
//     const token = localStorage.getItem('token');
  
//     // ✅ Ensure setUser is called correctly inside same context
//     if (token) {
//       this.setUser({ token: token });
//     }
  
//     // ✅ Axios call — no arrow function mistake
//     axios.get('/user')
//       .then((response) => {
//         this.setUser(response.data); // this is okay here
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav user={this.state.user} setUser={this.setUser}/>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route exact path="/login" element={<Login user={this.state.user}/>} />
//             <Route exact path="/register" element={<Register user={this.state.user}/>} />
//             <Route exact path="/user/profile" element={<Profile user={this.state.user}/>} />
//             <Route exact path="/forget" element={<Forget />} />
//             <Route exact path="/reset/:id" element={<Reset />} />
            
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }

// export default Header;
import React, { Component } from 'react';
import Nav from './Nav';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import Forget from '../components/Forget';
import Reset from '../components/Reset';
import Transaction  from '../components/Transaction';
import Claim from '../components/form';
import Admin from '../components/Admin';
import Support from '../components/Support';
import Success from '../components/Success';
import AddEmp from '../components/AddEmp';
import HowItWorks from '../components/HowItWorks';



import axios from 'axios';

class Header extends Component {
  state = {
    user: null, // Initially no user is logged in
  };

  // When the component mounts, check if user is authenticated
  componentDidMount() {
    const token = localStorage.getItem('token'); // Get token from localStorage
    if (token) {
      axios
        .get('/user', { headers: { Authorization: `Bearer ${token}` } }) // Fetch user data
        .then((response) => {
          this.setUser(response.data); // If successful, set user state
        })
        .catch((error) => {
          console.log('Error fetching user data:', error); // Log any errors
        });
    }
  }

  // Function to set user data to the state
  setUser = (user) => {
    this.setState({ user }); // Update state with the user data
  };

  render() {
    return (
      <Router>
        <div>
          {/* Pass user state to Nav component */}
          <Nav user={this.state.user} setUser={this.setUser} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login setUser={this.setUser} />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/user/profile" element={<Profile user={this.state.user} />} />
            <Route exact path="/forget" element={<Forget />} />
            <Route exact path="/transaction" element={<Transaction />} />
            <Route exact path="/claim/Amount" element={<Claim />} />
            <Route exact path="/admin/page" element={<Admin />} />
            <Route exact path="/support/page" element={<Support />} />
            <Route exact path="/howItWorks" element={<HowItWorks />} />
            <Route exact path="/success" element={<Success />} />
            <Route exact path="/addEmp" element={<AddEmp />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default Header;
