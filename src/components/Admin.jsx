// // import React, { Component } from 'react';
// // import AddIcon from '@mui/icons-material/Add';
// // import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// // import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

// // import { Button } from '../components/index';

// // class Admin extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             isAdmin: true // 🔁 Replace this logic as needed (like localStorage, props, etc.)
// //         };
// //     }

// //     handleNavigate = (path) => {
// //         this.props.history.push(path);
// //     };

// //     render() {
// //         const { isAdmin } = this.state;

// //         return (
// //             <div className='flex items-center justify-center min-h-screen'>
// //                 {isAdmin ? (
// //                     <div className='flex items-center justify-evenly w-full flex-wrap gap-4'>
// //                         <Button
// //                             className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300 text-white flex flex-col items-center justify-center gap-2'
// //                             style={{ backgroundColor: '#f96d00' }}
// //                             onClick={() => this.handleNavigate('/updEmp')}
// //                         >
// //                             <ArrowUpwardIcon style={{ fontSize: '5rem', fontWeight: 'bold' }} />
// //                             <p>Update Details</p>
// //                         </Button>
// //                         <Button
// //                             className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300 text-white flex flex-col items-center justify-center gap-2'
// //                             style={{ backgroundColor: '#ffa323' }}
// //                             onClick={() => this.handleNavigate('/dump')}
// //                         >
// //                             <ArrowCircleDownIcon style={{ fontSize: '5rem', fontWeight: 'bold' }} />
// //                             <p>Transaction Dump</p>
// //                         </Button>
// //                         <Button
// //                             className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300 text-white flex flex-col items-center justify-center gap-2'
// //                             style={{ backgroundColor: '#0b8457' }}
// //                             onClick={() => this.handleNavigate('/addEmp')}
// //                         >
// //                             <AddIcon style={{ fontSize: '5rem', fontWeight: 'bold' }} />
// //                             <p>Add Employee</p>
// //                         </Button>
// //                     </div>
// //                 ) : (
// //                     <div className="text-2xl font-semibold text-red-500">
// //                         Please Login as Admin to access this page!
// //                     </div>
// //                 )}
// //             </div>
// //         );
// //     }
// // }

// // export default Admin;

// import React, { Component } from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// import { Button, Table } from '../components/index';
// import AdminClaimTable from './AdminClaimTable';
// // import { connect } from 'react-redux';
// // import { withRouter } from 'react-router-dom';

// class Admin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             allClaims: [
//                 { claimed: '₹1,000', passed: '₹900', month: 'January', year: '2025', remarks: 'Dental Checkup' },
//                 { claimed: '₹3,000', passed: '₹2,500', month: 'March', year: '2025', remarks: 'Body Checkup' },
//                 { claimed: '₹2,000', passed: '₹2,000', month: 'February', year: '2025', remarks: 'Eye Specialist Consultation' },
//                 { claimed: '₹1,500', passed: '₹1,200', month: 'April', year: '2025', remarks: 'Lab Test' },
//                 { claimed: '₹4,000', passed: '₹3,800', month: 'May', year: '2025', remarks: 'Medicines Purchase' },
//                 { claimed: '₹2,500', passed: '₹2,000', month: 'June', year: '2025', remarks: 'X-Ray & Ultrasound' },
//                 { claimed: '₹3,500', passed: '₹3,000', month: 'July', year: '2025', remarks: 'ENT Consultation' },
//                 { claimed: '₹1,800', passed: '₹1,500', month: 'August', year: '2025', remarks: 'Skin Allergy Treatment' },
//             ],
//         };
//     }

//     navigateTo = (path) => {
//         this.props.history.push(path);
//     };

//     render() {
//         const homeClaims = this.state.allClaims.slice(0, 4);
//         const { admin } = this.props;

//         return (
//             <div className='flex items-center justify-center min-h-screen'>
//                 {admin ? (
//                     <div className='flex flex-col items-center justify-evenly w-full'>
//                         <div className='space-x-25'>
//                             <Button className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#f96d00' }}
//                                 onClick={() => this.navigateTo('/updEmp')}
//                             >
//                                 <ArrowUpwardIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//                                 <p>Update Details</p>
//                             </Button>
//                             <Button className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#ffa323' }}
//                                 onClick={() => this.navigateTo('/dump')}
//                             >
//                                 <ArrowCircleDownIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//                                 <p>Transaction Dump</p>
//                             </Button>
//                             <Button className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300' style={{ backgroundColor: '#0b8457' }}
//                                 onClick={() => this.navigateTo('/addEmp')}
//                             >
//                                 <AddIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//                                 <p>Add Employee</p>
//                             </Button>
//                         </div>
//                         <div>
//                             <AdminClaimTable claims={homeClaims} />
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="text-2xl font-semibold text-red-500">
//                         Please Login as Admin to access this page!
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     admin: state.auth.admin,
// });

// export default Admin;

// import React, { Component } from 'react';
// import AddIcon from '@mui/icons-material/Add';
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
// import { Button } from '../components/index';
// import AdminClaimTable from './AdminClaimTable';


// class Admin extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       allClaims: [
//         { claimed: '₹1,000', passed: '₹900', month: 'January', year: '2025', remarks: 'Dental Checkup' },
//         { claimed: '₹3,000', passed: '₹2,500', month: 'March', year: '2025', remarks: 'Body Checkup' },
//         { claimed: '₹2,000', passed: '₹2,000', month: 'February', year: '2025', remarks: 'Eye Specialist Consultation' },
//         { claimed: '₹1,500', passed: '₹1,200', month: 'April', year: '2025', remarks: 'Lab Test' },
//         { claimed: '₹4,000', passed: '₹3,800', month: 'May', year: '2025', remarks: 'Medicines Purchase' },
//         { claimed: '₹2,500', passed: '₹2,000', month: 'June', year: '2025', remarks: 'X-Ray & Ultrasound' },
//         { claimed: '₹3,500', passed: '₹3,000', month: 'July', year: '2025', remarks: 'ENT Consultation' },
//         { claimed: '₹1,800', passed: '₹1,500', month: 'August', year: '2025', remarks: 'Skin Allergy Treatment' },
//       ],
//     };
//   }

//   componentDidMount() {
//     if (!this.props.admin) {
//       this.props.history.push('/login'); // 🔁 Replace '/login' with your desired path
//     }
//   }

//   navigateTo = (path) => {
//     this.props.history.push(path);
//   };

//   render() {
//     const homeClaims = this.state.allClaims.slice(0, 4);

//     return (
//       <div className='flex items-center justify-center min-h-screen'>
//         <div className='flex flex-col items-center justify-evenly w-full'>
//           <div className='space-x-25'>
//             <Button
//               className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
//               style={{ backgroundColor: '#f96d00' }}
//               onClick={() => this.navigateTo('/updEmp')}
//             >
//               <ArrowUpwardIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//               <p>Update Details</p>
//             </Button>
//             <Button
//               className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
//               style={{ backgroundColor: '#ffa323' }}
//               onClick={() => this.navigateTo('/dump')}
//             >
//               <ArrowCircleDownIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//               <p>Transaction Dump</p>
//             </Button>
//             <Button
//               className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
//               style={{ backgroundColor: '#0b8457' }}
//               onClick={() => this.navigateTo('/addEmp')}
//             >
//               <AddIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
//               <p>Add Employee</p>
//             </Button>
//           </div>
//           <div>
//             <AdminClaimTable claims={homeClaims} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Admin;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔁 Use this hook in functional components
import AddIcon from '@mui/icons-material/Add';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Button } from '../components/index';
import AdminClaimTable from './AdminClaimTable';
import { Link } from 'react-router-dom'

const Admin = () => {
  const navigate = useNavigate(); // 🔁 Use navigate instead of history
  const [allClaims, setAllClaims] = useState([
    { claimed: '₹1,000', passed: '₹900', month: 'January', year: '2025', remarks: 'Dental Checkup' },
    { claimed: '₹3,000', passed: '₹2,500', month: 'March', year: '2025', remarks: 'Body Checkup' },
    { claimed: '₹2,000', passed: '₹2,000', month: 'February', year: '2025', remarks: 'Eye Specialist Consultation' },
    { claimed: '₹1,500', passed: '₹1,200', month: 'April', year: '2025', remarks: 'Lab Test' },
    { claimed: '₹4,000', passed: '₹3,800', month: 'May', year: '2025', remarks: 'Medicines Purchase' },
    { claimed: '₹2,500', passed: '₹2,000', month: 'June', year: '2025', remarks: 'X-Ray & Ultrasound' },
    { claimed: '₹3,500', passed: '₹3,000', month: 'July', year: '2025', remarks: 'ENT Consultation' },
    { claimed: '₹1,800', passed: '₹1,500', month: 'August', year: '2025', remarks: 'Skin Allergy Treatment' },
  ]);

  const admin = true; // Replace with your actual admin state or logic

  useEffect(() => {
    if (!admin) {
      navigate('/login'); // 🔁 Use navigate to redirect
    }
  }, [admin, navigate]); // 🔁 Added navigate to dependency array

  const navigateTo = (path) => {
    navigate(path); // 🔁 Use navigate for routing
  };

  const homeClaims = allClaims.slice(0, 4);

  return (
    <div className='flex items-center min-h-screen'>
      <div className='flex flex-col items-center gap-x-10 w-full'>
        <div className='space-x-12'>
          <Button
            className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
            style={{ backgroundColor: '#f96d00' }}
            onClick={() => navigateTo('/updEmp')}
          >
            <ArrowUpwardIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
            <p>Update Details</p>
          </Button>
          <Button
            className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
            style={{ backgroundColor: '#ffa323' }}
            onClick={() => navigateTo('/dump')}
          >
            <ArrowCircleDownIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
            <p>Transaction Dump</p>
          </Button>
          <Link to="/addEmp">
            <Button
              className='h-[12rem] w-[13.5rem] rounded-3xl hover:shadow-2xl duration-300'
              style={{ backgroundColor: '#0b8457' }}
              onClick={() => navigateTo('/addEmp')}
            >
              <AddIcon sx={{ fontSize: '5rem', fontWeight: 'bold' }} />
              <p>Add Employee</p>
            </Button></Link>
        </div>

        <div>
          <AdminClaimTable claims={homeClaims} />
        </div>
      </div>
    </div>
  );
};

export default Admin;




