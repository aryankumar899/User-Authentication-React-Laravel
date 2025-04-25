import React, { Component } from 'react';
import { Input, Button } from '../components/index';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

class AddEmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      empId: '',
      contact: '',
      email: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    const { name, empId, contact, email } = this.state;
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!empId) errors.empId = 'Employee ID is required';
    if (!contact.match(/^[0-9]{10}$/)) errors.contact = 'Enter valid 10-digit contact number';
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Enter valid email address';
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log(this.state);
      // Dispatch your redux action here
    } else {
      this.setState({ errors });
    }
  };

  navigateToAdmin = () => {
    this.props.history.push('/admin');
  };

  render() {
    const { name, empId, contact, email, errors } = this.state;
    const { authStatus } = this.props;

   

    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-10">
        <form
          onSubmit={this.handleSubmit}
          className="w-full max-w-6xl bg-white text-black p-10 rounded-xl shadow-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              value={name}
              onChange={this.handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <Input
              label="Employee ID"
              type="text"
              name="empId"
              placeholder="Enter your employee ID"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              value={empId}
              onChange={this.handleChange}
            />
            {errors.empId && <p className="text-red-500">{errors.empId}</p>}

            <Input
              label="Contact Number"
              type="tel"
              name="contact"
              placeholder="Enter your 10-digit mobile number"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              value={contact}
              onChange={this.handleChange}
            />
            {errors.contact && <p className="text-red-500">{errors.contact}</p>}

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter your official email address"
              className="bg-white text-black rounded-lg text-xl px-3 py-1"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mt-8 flex justify-center">
            <Button type="submit">Add Employee</Button>
          </div>
        </form>

        <div className="mt-5">
          <Button className="rounded-full" onClick={this.navigateToAdmin}>
            <ArrowCircleLeftIcon />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.status,
});

export default AddEmp;
