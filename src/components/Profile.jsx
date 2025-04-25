import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBalance: false
    };
  }

  toggleBalance = () => {
    this.setState(prevState => ({
      showBalance: !prevState.showBalance
    }));
  };
  render() {
    let email = ''
    let name = ''

    if (this.props.user) {
      email = this.props.user.email
      name = this.props.user.name
    }


    return (

      //       <div>
      //         <br></br>
      //         <br></br>
      //             <div class="row">
      //               <div class="col-lg-4 offset-lg-4 bg-secondary  p-4 rounded shadow">
      //                 <h3 class="text-center text-white">User Profile</h3>
      //                 <ul class="list-group list-group-flush fw-bold">
      //   <li class="list-group-item ">Name : {name}</li>
      //   <li class="list-group-item">Email : {email}</li>

      // </ul>
      //               </div>
      //             </div>
      //       </div>
      <div className='bg-[#4DA8DA]'>
        <div className='max-w-2xl mx-auto pt-10'>
          <div className='bg-[#F5F5F5] text-black text-start py-7 text-4xl rounded-lg '>
            <h2 className='text-5xl text-center font-semibold'>Medical Card</h2>
            <div className='flex flex-col justify-evenly items-center'>
              <div className='mt-3 flex items-center gap-x-36'>
                <h2 className='font-Jost'>Jhon Doe</h2>
                <div className=''>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa&pid=Api&P=0&h=180" alt="" />
                </div>

              </div>

              <div className='flex items-center mt-5'>
                <h2 className='max-w-[25rem]'>(815) 436-6914
                  21949 W Renwick Rd
                  Plainfield, Illinois(IL), 60544
                </h2>
                <div>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.3PS24iiu-A3RpY9MdvBxKAHaHa&pid=Api&P=0&h=180" alt="" className='w-32 h-32' />
                </div>
              </div>
              <div className='mt-5 space-x-8'>
                <span>ID:</span><span>ABC12XTY25</span>
              </div>
              {/* 💰 Balance Toggle Section Starts Here */}
<div className='mt-5'>
  <button
    onClick={this.toggleBalance}
    className="bg-[#003366] text-white px-4 py-2 rounded hover:bg-[#005599] transition"
  >
    {this.state.showBalance ? 'Hide Balance' : 'Show Balance'}
  </button>
  {this.state.showBalance && (
    <div className='mt-2 text-2xl font-semibold'>
      Current Balance: ₹12,500
    </div>
  )}
</div>
{/* 💰 Balance Toggle Section Ends Here */}
            </div>

          </div>


        </div>
        <div class="flex justify-center items-center mt-10 w-100">
          <div class="overflow-x-auto">
            <table class="min-w-[100vw] overflow-x-hidden bg-white text-black border border-gray-300 rounded-lg shadow-md">
              <thead class="bg-amber-600 text-white text-lg">
                <tr>
                  <th class="py-3 px-4 text-left border-r">Claimed Amount</th>
                  <th class="py-3 px-4 text-left border-r">Passed Amount</th>
                  <th class="py-3 px-4 text-left border-r">Month</th>
                  <th class="py-3 px-4 text-left border-r">Year</th>
                  <th class="py-3 px-4 text-left">Remarks</th>
                </tr>
              </thead>
              <tbody class="text-xl">
                <tr class="border-t border-gray-300">
                  <td class="py-3 px-4 border-r">₹1,000</td>
                  <td class="py-3 px-4 border-r">₹900</td>
                  <td class="py-3 px-4 border-r">January</td>
                  <td class="py-3 px-4 border-r">2025</td>
                  <td class="py-3 px-4">Dental Checkup</td>
                </tr>
                <tr class="border-t border-gray-300">
                  <td class="py-3 px-4 border-r">₹3,000</td>
                  <td class="py-3 px-4 border-r">₹2,500</td>
                  <td class="py-3 px-4 border-r">March</td>
                  <td class="py-3 px-4 border-r">2025</td>
                  <td class="py-3 px-4">Body Checkup</td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-center mt-4">
              <Link to="/transaction">
                <button
                  type="button"
                  class="bg-[#003366] text-white font-medium px-6 py-2 rounded hover:bg-gray-300 transition duration-300 mb-5 "
                >
                  Show More
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    )
  }
}

export default Profile

// import React, { Component } from 'react';

// class Profile extends Component {
//   render() {
//     const { user } = this.props;

//     // 🔄 Agar user data load nahi hua toh loading show karo
//     if (!user || !user.name || !user.email) {
//       return (
//         <div className="text-center mt-5">
//           <h4>Loading user profile...</h4>
//         </div>
//       );
//     }

//     return (
//       <div>
//         <br />
//         <br />
//         <div className="row">
//           <div className="col-lg-4 offset-lg-4 bg-secondary p-4 rounded shadow">
//             <h3 className="text-center text-white">User Profile</h3>
//             <ul className="list-group list-group-flush fw-bold">
//               <li className="list-group-item">Name : {user.name}</li>
//               <li className="list-group-item">Email : {user.email}</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;

