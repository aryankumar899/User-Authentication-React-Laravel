// import React, { Component } from 'react'
// // import '../../src/output.css'
// import IdCard from '../components/IdCard'
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../components/WhatsApp Image 2025-02-28 at 20.44.50_961955ea.jpg';
  
// export class Home extends Component {
//   render() {
//     return (
//       <div>
//          <section className='bg-[#4DA8DA] mx-auto min-h-screen flex justify-center items-center'>
               
                   
                 
//                     {/* <div className="text-white text-2xl font-semibold">
//                         Please Login!!
//                     </div> */}



      
                
//             </section>
//       </div>
//     )
//   }
// }

// export default Home
import React, { Component } from "react";
import { motion } from "framer-motion";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContact: false,
    };
  }

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  render() {
    const features = [
      {
        title: "Role-Based Web Platform",
        desc: "A secure, web-based solution for managing medical card transactions of ex-employees with role-specific access for users and admins.",
      },
      {
        title: "User Portal for Ex-Employees",
        desc: "Ex-employees can log in, view personal details, and track medical transaction history in a clean table view.",
      },
      {
        title: "Admin Control Dashboard",
        desc: "Admins can verify, approve or reject user requests, and manage data in bulk using CSV/XLSX uploads.",
      },
      // {
      //   title: "Insurance Integration",
      //   desc: "Integrated insurance system to review claims, approve valid ones, and reject with reasons, notifying both user and admin.",
      // },
    ];
    
    return (
      <div className="w-full font-sans">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-200 to-blue-100 py-16 text-center">
          <h1 className="text-4xl font-bold text-blue-800">
            Medical Card Transaction Management System
          </h1>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          A smart web solution to handle medical card transactions of ex-employees with personalized access for users and powerful tools for admins.
          </p>
          <button
            onClick={this.toggleContact}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          >
            Get In Touch
          </button>
        </section>

        {/* Features Section */}
        <section className="py-12 px-4 grid md:grid-cols-3 gap-6 bg-white">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 shadow-lg rounded-2xl bg-blue-50 hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </section>

     
        {/* Sliding Contact Section */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: this.state.showContact ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 200 }}
          className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg z-50 p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-blue-800">Code Crusaders</h3>
            <button
              onClick={this.toggleContact}
              className="text-red-500 font-bold text-lg"
            >
              ×
            </button>
          </div>
          <form className="space-y-4">
            <input className="w-full p-2 border rounded-md" type="text" placeholder="Your Name" />
            <input className="w-full p-2 border rounded-md" type="email" placeholder="Your Email" />
            <textarea className="w-full p-2 border rounded-md" placeholder="Message" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    );
  }
}

export default HomePage;

