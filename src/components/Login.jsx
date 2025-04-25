// // import React, { Component } from 'react'
// // import { Link} from 'react-router-dom'
// // import { Navigate } from "react-router-dom";
// // import axios from 'axios';

// //  class Login extends Component {
  
// //   state={
// //     email:'',
// //     password:'',
// //     message:''
// //   }
// //   //Login form Submit
// //   formSubmit = (e) => {
// //     e.preventDefault();
// //     const data = {
// //       email: this.state.email,
// //       password: this.state.password,
    
// //        }

// //        axios.post('/login', data)
// //        .then((response) => {
// //          console.log("Full Response:", response); // Debugging - Check the response structure
     
// //          if (response && response.data) { // Ensure response and response.data exist
// //            localStorage.setItem('token', response.data.token);
// //            this.setState({ loggedIn: true });
     
// //            if (response.data.user) {
// //              this.props.setUser(response.data.user);
// //            } else {
// //              console.error("User data is missing in response:", response);
// //            }
// //          } else {
// //            console.error("Unexpected response structure:", response);
// //          }
// //        })
// //        .catch((error) => {
// //          console.error("Login Error:", error);
     
// //          if (error.response && error.response.data) {
// //            this.setState({ message: error.response.data.message });
// //          } else {
// //            this.setState({ message: "An unexpected error occurred." });
// //          }
// //        });
     
 
// //   }
// //   render() {

// //     //After login redirect to the profile page
// //     if (this.state.loggedIn) {
// //       return <Navigate to="/user/profile" replace />;
// //     }

// //     let error=""

// //     if(this.state.message){
// //       error=(
// //         <div>
// //           <div class="alert alert-danger"  role="alert">{this.state.message} </div>
// //         </div>
// //       )
// //     }
// //     return (
// //       <div>
// //         <br></br>
// //         <br></br>
// //             <div class="row">
// //               <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
// //                 <h3 class="text-center text-white">Login Account</h3>
// //                 <form onSubmit={this.formSubmit}>
// //                   {error}
// //   <div class="mb-3">
// //     <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
// //     <input type="email" class="form-control" name="email" required onChange={(e)=>{
// //       this.setState({email:e.target.value})
// //     }}/>
    
// //   </div>
// //   <div class="mb-3">
// //     <label for="exampleInputPassword1" class="form-label text-white">Password</label>
// //     <input type="password" class="form-control" name="password"  required onChange={(e)=>{
// //       this.setState({password:e.target.value})
// //     }}/>
// //   </div>
  
// //   <button type="submit" class="btn btn-primary w-100">Login</button>
// //   <br></br>
        
// //   Forget My Password <Link to="/forget">Click Here</Link>
// // </form>
// //               </div>
// //             </div>
// //       </div>
// //     )
// //   }
// // }

// // export default Login

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { Button, Input, Logo } from '../components/index';
// import axios from 'axios';

// function Login() {
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const { register, handleSubmit } = useForm();

//     const login = async (data) => {
//         setError("");

//         try {
//             const response = await axios.post('/login', data);
//             if (response && response.data) {
//                 localStorage.setItem("token", response.data.token);

//                 if (response.data.user) {
//                     // You can optionally pass user data to global context or props here
//                     console.log("User Logged In:", response.data.user);
//                 }

//                 navigate("/user/profile");
//             }
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.message);
//             } else {
//                 setError("Something went wrong. Please try again.");
//             }
//         }
//     };

//     return (
//       <div className='bg-[#4DA8DA]'>
//         <div className='flex items-center justify-center w-full'>
//             <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
//                 <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//                 </div>

//                 <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Don&apos;t have any account?&nbsp;
//                     <Link
//                         to="/register"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign Up
//                     </Link>
//                 </p>
//                 {error && <p className="text-red-600 mt-8 text-center ">{error}</p>}

//                 <form onSubmit={handleSubmit(login)} className='mt-8'>
//                     <div className='space-y-5'>
//                         <Input
//                             label="Email: "
//                             type="email"
//                             placeholder="Enter Your Email"
//                             {...register("email", {
//                                 required: "Email is required",
//                                 validate: {
//                                     matchPattern: (value) =>
//                                         /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                         "Email Address must be valid",
//                                 },
//                             })}
//                         />

//                         <Input
//                             label="Password"
//                             type="password"
//                             placeholder="Enter your Password"
//                             {...register("password", {
//                                 required: "Password is required",
//                             })}
//                         />

// <Button
//   type='submit'
//   className='w-full bg-[#003366] hover:bg-[#398fbf] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out'
// >
//   Sign In
// </Button>

//                     </div>
//                 </form>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input, Logo } from '../components/index';
import axios from 'axios';

function Login() {
    const [error, setError] = useState("");
    const [role, setRole] = useState("user");
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const login = async (data) => {
        setError("");

        try {
            const response = await axios.post('/login', { ...data, role });

            if (response && response.data) {
                localStorage.setItem("token", response.data.token);

                if (response.data.user) {
                    console.log("User Logged In:", response.data.user);
                }

                // Redirect based on role
                if (role === "admin") {
                    navigate("/admin/page");
                } else {
                    navigate("/user/profile");
                }
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className='bg-[#4DA8DA] min-h-screen flex items-start justify-center pt-10'>
            <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
                <div className='mb-4 flex justify-center'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width="100%" />
                    </span>
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Login as:
                    </label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have an account?&nbsp;
                    <Link to="/register" className="font-medium text-primary transition-all duration-200 hover:underline">
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center ">{error}</p>}

                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter Your Email"
                            {...register("email", {
                                required: "Email is required",
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email Address must be valid",
                                },
                            })}
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your Password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />

                        <Button
                            type='submit'
                            className='w-full bg-[#003366] hover:bg-[#398fbf] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out'
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

