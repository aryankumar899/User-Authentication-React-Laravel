// import React, { Component } from 'react'
// import { BrowserRouter as Router, Routes, Route ,Link } from 'react-router-dom';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo2-removebg-preview.png'
import { Button } from '../components/index';
// class Nav extends Component {
//   state={
//     loggedOut:''
//   }
//   logout=()=>{
//     localStorage.clear();
//     this.props.setUser(null);
//   }
//   render() {


//       let button;
//       let profile;
//       if(localStorage.getItem('token')){
//         button=(
//           <div>
//             <Link class="navbar-brand" to="/"  onClick={this.logout}>Logout</Link>
//           </div>
//         )
//         profile=(
//           <div>
//          <Link class="nav-link active" to="/user/profile">Profile</Link>

//         </div>
//         )
//       }else{
//         button=(
//           <div>

//       <Link class="navbar-brand" to="/login">Login</Link>
//       <Link class="navbar-brand" to="/register">Register</Link>
//       <Link class="navbar-brand" to="/register">Transaction</Link>

//           </div>
//         )
//       }


//     return (
//       <div class="p-3 mb-2 bg-black text-white">
//         <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <Link class="navbar-brand" to="/">Learning Hub</Link>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarText">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link class="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li class="nav-item">
//               {profile}
//         </li>

//       </ul>
//        <span class="navbar-text">
//        {button}
//       {/* <Link class="navbar-brand" to="/login">Login</Link>
//       <Link class="navbar-brand" to="/register">Register</Link> */}
//       </span> 

//     </div>
//   </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Nav
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Nav extends Component {
// logout = () => {
//   localStorage.clear(); // Clear the token from localStorage
//   this.props.setUser(null); // Reset user state in parent component (Header)
// };

// render() {
//   let button;
//   let profile;

//   // Check if user is logged in
//   if (this.props.user) {
//     // If logged in, show logout and profile links
//     button = (
//       <div>
//         <Link className="navbar-brand" to="/" onClick={this.logout}>
//           Logout
//         </Link>
//       </div>
//     );
//     profile = (
//       <div>
//         <Link className="nav-link active" to="/user/profile">
//           Profile
//         </Link>
//       </div>
//     );
//   } else {
//     // If not logged in, show login and register links
//     button = (
//       <div>
//         <Link className="navbar-brand" to="/login">
//           Login
//         </Link>
//         <Link className="navbar-brand" to="/register">
//           Register
//         </Link>
//       </div>
//     );
//   }

// return (
// <div className="p-3 mb-2 bg-black text-white">
//   <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <Link className="navbar-brand" to="/">
//         Learning Hub
//       </Link>
//       <div className="collapse navbar-collapse" id="navbarText">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link active" aria-current="page" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">{profile}</li>
//         </ul>
//         <span className="navbar-text">{button}</span>
//       </div>
//     </div>
//   </nav>
// </div>


//       <header className="bg-[#003366]">
//       <div className="w-full max-w-7xl mx-auto px-4">
//         <nav className="flex justify-around items-center max-w-7xl mx-auto">
//           <div>
//             <button
//               type="button"
//               className="bg-[#f5f5f5] text-white"
//               style={{ border: '0px' }}
//             >
//               <div>
//                 <img alt="logo" width="100px" src="/logo1.png" />
//               </div>
//             </button>
//           </div>
//           <ul className="flex gap-x-2 text-xl items-center">
//             <li>
//               <button>Login</button>
//             </li>
//           </ul>
//           <div>
//             <div className="rounded-full">
//               <button
//                 className="rounded-full p-1 flex justify-center items-center"
//                 style={{
//                   borderRadius: '55%',
//                   background: 'rgb(245, 245, 245)',
//                   width: '3rem',
//                   height: '3rem',
//                 }}
//               >
//                 <svg
//                   className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium text-blue-600 text-xl css-1umw9bq-MuiSvgIcon-root"
//                   focusable="false"
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                   data-testid="PersonIcon"
//                 >
//                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>


//     );
//   }
// }

{/* export default Nav;


// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Button, Logo } from '../index'
// import Container from '../Container'
// import PersonIcon from '@mui/icons-material/Person';
// import { useNavigate } from 'react-router-dom';
// import LogoutBtn from './LogoutBtn';

// function Header() { */}

//     const navItems = [
//         {
//             name: "Home",
//             path: "/",

//         },
//         {
//             name: "Transaction",
//             path: "/log",

//         },
//         {
//             name: "Claim Request",
//             path: "/form",

//         },
//         {
//             name: "Login",
//             path: "/login",

//         },

//     ]
//     return (
//         <header className='bg-[#003366]' style={{ width: "full" }}>
//             <Container>
//                 <nav className='flex justify-around items-center max-w-7xl mx-auto'>
//                     <div>
//                         <Button
//                             onClick={() => navigate('/')}
//                             style={{ border: "0" }}
//                         >
//                             <Logo />
//                         </Button>

//                     </div>
//                     <ul className='flex gap-x-2 text-xl items-center'>

//                         {
//                             navItems.map(item => (
//                                 (item.active ? (
//                                     <li key={item.name}>
//                                         <button
//                                             onClick={() => navigate(item.path)}
//                                         >
//                                             {item.name}
//                                         </button>
//                                     </li>
//                                 ) : null)
//                             ))
//                         }

//                          (
//                             <li>
//                                 <LogoutBtn />
//                             </li>
//                         )
//                     </ul>
//                     <div>
//                         <div className='rounded-full '>
//                             <button className='rounded-full p-1 flex justify-center items-center' style={{ borderRadius: "55%", background: "#F5F5F5", width: "3rem", height: "3rem" }}>
//                                 <PersonIcon className='text-blue-600 text-xl' />
//                             </button>
//                         </div>
//                     </div>
//                 </nav>
//             </Container>
//         </header>
//     )
// }

// export default Header










// class Nav extends Component {
//   logout = () => {
//     localStorage.clear();
//     this.props.setUser(null);
//   };

//   render() {
//     const { user } = this.props;

//     const button = user ? (
//       <div>
//         <Link className="" to="/" onClick={this.logout}>
//           Logout
//         </Link>
//         <Link className="navbar-brand text-white" to="/transaction">
//           Transaction
//         </Link>

//         <Link className="navbar-brand text-white" to="/claim/Amount">
//           Claim Amount
//         </Link>
//       </div>
//     ) : (
//       <div>
//         <Link className=" text-white" to="/login">Login</Link>
//         <Link className=" text-white" to="/register">Register</Link>
//       </div>
//     );

//     const profile = user && (
//       <div>
//         <Link className="flex justify-around items-center max-w-7xl mx-auto text-underline-offset: none;" to="/user/profile">
//           Profile
//         </Link>
//       </div>
//     );

//     return (
//       <header className="bg-[#003366] text-white">
//         <div className="w-full max-w-7xl mx-auto px-4">
//           <nav className="flex justify-around items-center max-w-7xl mx-auto py-2">
//             <div>
//               <button type="button" className="bg-transparent" style={{ border: '0px' }}>
//                 <img alt="logo" width="100px" src={logo} />
//               </button>
//             </div>

//             <ul className="flex gap-x-4 text-xl items-center text-decoration-style: none">
//               <li>
//                 <Button
//                 className='list-none'
//                 >
//                   home
//                 </Button>

//               </li>

//               <li>
//                 <span className="px-3 py-2 rounded-md text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-100 transition duration-300">
//                   {profile}
//                 </span>
//               </li>

//             </ul>

//             <div className="flex items-center gap-x-4">
//               <span>{button}</span>
//               <button
//                 className="rounded-full flex justify-center items-center"
//                 style={{
//                   borderRadius: '55%',
//                   background: 'rgb(245, 245, 245)',
//                   width: '3rem',
//                   height: '3rem',
//                 }}
//               >
//                 <svg
//                   className="text-blue-600 text-xl"
//                   focusable="false"
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                   data-testid="PersonIcon"
//                 >
//                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
//                   1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 
//                   1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"></path>
//                 </svg>
//               </button>
//             </div>
//           </nav>
//         </div>
//       </header>
//     );
//   }
// }

// export default Nav;
class Nav extends Component {
  logout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    const { user } = this.props;

    const button = user ? (
      <div className="flex gap-4 items-center">
        <Link
          className="px-4 py-2 bg-red-600 hover:bg-red-700  hover:underline text-white rounded no-underline"
          to="/"
          onClick={this.logout}
        >
          Logout
        </Link>
        <Link className="text-white hover:text-blue-300 no-underline hover:underline" to="/transaction">
          Transaction
        </Link>
        <Link className="text-white hover:text-blue-300 hover:underline no-underline" to="/claim/Amount">
          Claim Amount
        </Link>
      </div>
    ) : (
      <div className="flex gap-4 items-center">
        <button className='px-4 py-2 rounded-md text-white text-lg hover:bg-blue-700 transition duration-300 ease-in-out bg-transparent'>
        <Link className="text-white hover:text-blue-300 no-underline rounded-2xl" to="/login">
          Login
        </Link>
        </button>
        <Link className="text-white hover:text-blue-300 no-underline" to="/register">
          Register
        </Link>
      </div>
    );

    const profile = user && (
      <Link   to="/user/profile">
              <button
                className="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center"
              >
              
                <svg
                  className="text-blue-600 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                  1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 
                  1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/>
                </svg>
              </button>
              </Link>
    );

    return (
      <header className="bg-[#003366] text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex justify-between items-center py-3">
            {/* Logo Section */}
            <div>
              <button type="button" className="bg-transparent border-0">
                <Link to="/"> <img alt="logo" width="100px" src={logo} /></Link>
              </button>
            </div>

            {/* Nav Links */}
            <ul className="flex gap-6 text-xl items-center list-none m-0 p-0">
              <li>

                <Link to="/">
                  <Button
                    className="px-4 py-2 rounded-md text-white text-lg hover:bg-blue-700 transition duration-300 ease-in-out bg-[#4DA8DA]"
                  >
                    Home
                  </Button></Link>

              </li>
              <li>
              <Link to="/support/page">
                  <Button
                    className="px-4 py-2 rounded-md bg-[#4DA8DA] text-white text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Contact Us
                  </Button></Link>
              </li>
          <li>
          <Link to="/howItWorks">
                  <Button
                    className="px-4 py-2 rounded-md text-white text-lg hover:bg-blue-700 transition duration-300 ease-in-out bg-[#4DA8DA]"
                  >
                    How it Works
                  </Button></Link>
          </li>


            </ul>

  
            {/* Auth Buttons and Icon */}
            <div className="flex items-center gap-4">
              {button}
              {/* <Link   to="/user/profile">
              <button
                className="bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center"
              >
              
                <svg
                  className="text-blue-600 w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                  1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 
                  1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"/>
                </svg>
              </button>
              </Link> */}
              {profile}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;



