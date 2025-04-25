// import React, { Component } from 'react';
// import { Input, Button } from '../components/index';
// import Upload from '../components/Upload';

// class Form extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       employeeId: '',
//       department: '',
//       expenseDate: '',
//       amount: '',
//       reason: '',
//       accountNumber: '',
//       ifsc: '',
//       phone: '',
//       email: '',
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);
//     // Do further processing if needed
//   };

//   render() {
//     return (
//       <div className='min-h- flex items-center justify-center py-10'>
//         <form onSubmit={this.handleSubmit} className='w-full max-w-6xl bg-white text-black p-10 rounded-xl shadow-md'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
//             <Input
//               label="Name"
//               type="text"
//               placeholder="Enter your full name"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Employee ID"
//               type="text"
//               placeholder="Enter your employee ID"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="employeeId"
//               value={this.state.employeeId}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Department"
//               type="text"
//               placeholder="Enter your department (e.g., HR, IT)"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="department"
//               value={this.state.department}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Date of Expense"
//               type="date"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="expenseDate"
//               value={this.state.expenseDate}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Amount Claimed"
//               type="number"
//               placeholder="Enter the amount in ₹ (INR)"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="amount"
//               value={this.state.amount}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Reason for Claim"
//               type="text"
//               placeholder="E.g., doctor consultation, lab test, medicines"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="reason"
//               value={this.state.reason}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Bank Account No."
//               type="text"
//               placeholder="Enter your bank account number"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="accountNumber"
//               value={this.state.accountNumber}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="IFSC Code"
//               type="text"
//               placeholder="Enter your bank’s IFSC code"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="ifsc"
//               value={this.state.ifsc}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Contact Number"
//               type="tel"
//               placeholder="Enter your 10-digit mobile number"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="phone"
//               value={this.state.phone}
//               onChange={this.handleChange}
//             />

//             <Input
//               label="Email Address"
//               type="email"
//               placeholder="Enter your official email address"
//               className="bg-white text-black rounded-lg text-xl px-3 py-1"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className='mt-10'>
//             <Upload className="w-full" />
//           </div>

//           <div className='mt-8 flex justify-center '>
//             <Button type='submit' className='bg-[#003366] h-10 w-20 rounded'>Submit</Button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;
import React, { Component } from 'react';
import { Input, Button } from '../components/index';
import Upload from '../components/Upload';
import { Navigate } from 'react-router-dom'; // ✅ import this

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      employeeId: '',
      department: '',
      expenseDate: '',
      amount: '',
      reason: '',
      accountNumber: '',
      ifsc: '',
      phone: '',
      email: '',
      submitted: false // ✅ New state
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    // ✅ Redirect trigger
    this.setState({ submitted: true });
  };

  render() {
    if (this.state.submitted) {
      return <Navigate to="/success" />; // ✅ redirect to success page
    }

    return (
      <div className='min-h-screen flex items-center justify-center py-10'>
        <form onSubmit={this.handleSubmit} className='w-full max-w-6xl bg-white text-black p-10 rounded-xl shadow-md'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
            <Input
              label="Name"
              type="text"
              placeholder="Enter your full name"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
  
            <Input
              label="Employee ID"
              type="text"
              placeholder="Enter your employee ID"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="employeeId"
              value={this.state.employeeId}
              onChange={this.handleChange}
            />
  
            <Input
              label="Department"
              type="text"
              placeholder="Enter your department (e.g., HR, IT)"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="department"
              value={this.state.department}
              onChange={this.handleChange}
            />
  
            <Input
              label="Date of Expense"
              type="date"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="expenseDate"
              value={this.state.expenseDate}
              onChange={this.handleChange}
            />
  
            <Input
              label="Amount Claimed"
              type="number"
              placeholder="Enter the amount in ₹ (INR)"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
  
            <Input
              label="Reason for Claim"
              type="text"
              placeholder="E.g., doctor consultation, lab test, medicines"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="reason"
              value={this.state.reason}
              onChange={this.handleChange}
            />
  
            <Input
              label="Bank Account No."
              type="text"
              placeholder="Enter your bank account number"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="accountNumber"
              value={this.state.accountNumber}
              onChange={this.handleChange}
            />
  
            <Input
              label="IFSC Code"
              type="text"
              placeholder="Enter your bank’s IFSC code"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="ifsc"
              value={this.state.ifsc}
              onChange={this.handleChange}
            />
  
            <Input
              label="Contact Number"
              type="tel"
              placeholder="Enter your 10-digit mobile number"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
  
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your official email address"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
  
          <div className='mt-10'>
            <Upload className="w-full" />
          </div>
  
          <div className='mt-8 flex justify-center '>
            <Button  type='submit' className='bg-[#003366] h-10 w-20 rounded'>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
