import React, { Component } from "react";
import axios from "axios";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      position: "",
      department: "",
      salary: "",
      dob: "",
      contact: "",
      joining_date: "",
    };
  }
  /*
  componentWillReceiveProps is required if you want to update the state values with new props values,
  this method will get called whenever any change happens to props values.
  Here id of the selected employee is passed as props.
  */
  componentWillReceiveProps() {
    axios.get(`/api/employee/${this.props.id}`).then((res) => {
      const employee = res.data;
      console.log(res.data);
      this.setState({
        fname: employee.fname,
        lname: employee.lname,
        department: employee.department,
        dob: employee.dob,
        salary: employee.salary,
        contact: employee.contact,
        position: employee.position,
        email: employee.email,
        joining_date: employee.joining_date,
      });
    });
  }
  /* _onFocus and _onBlur are used to change the type of Joining Date field to date . 
    These functions are explicity used to display the placeholder of a input type="date".
   _onFocus and _onBlur are respectively called using onFocus and onBlur events.
  */
  _onFocus = (e) => {
    e.currentTarget.type = "date";
  };
  _onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Joining Date";
  };
  /* Dob_onFocus and Dob_onBlur are used to change the type of Date of Birth field to date . 
    These functions are explicity used to display the placeholder of a input type="date".
   Dob_onFocus and  Dob_onBlur are respectively called using onFocus and onBlur events.
  */
  Dob_onFocus = (e) => {
    e.currentTarget.type = "date";
  };
  Dob_onBlur = (e) => {
    e.currentTarget.type = "text";
    e.currentTarget.placeholder = "Date of Birth";
  };
  /*onChange function is used to reflect the changes of input fields to the state. */
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  /*onSubmit function calls axios put method to edit Employee detail.
   window.location.reload(false) reloads the page so that the changes are displayed in the list.
  */
  onSubmit = (e) => {
    const employee_add = {
      fname: this.state.fname,
      lname: this.state.lname,
      department: this.state.department,
      dob: this.state.dob,
      salary: this.state.salary,
      contact: this.state.contact,
      position: this.state.position,
      email: this.state.email,
      joining_date: this.state.joining_date,
    };
    console.log(employee_add);
    axios.put(`./api/employee/${this.props.id}/`, employee_add).then((res) => {
      console.log(res.data);
    });
    console.log(this.state);
    window.location.reload(false);
  };
  render() {
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Edit Details</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              placeholder="First Name"
              type="text"
              name="fname"
              onChange={this.onChange}
              value={this.state.fname}
            />
          </div>
          <div>
            <input
              placeholder="Last Name"
              type="text"
              name="lname"
              onChange={this.onChange}
              value={this.state.lname}
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Position"
              type="text"
              name="position"
              onChange={this.onChange}
              value={this.state.position}
            />
          </div>
          <div>
            <input
              placeholder="Department"
              type="text"
              name="department"
              onChange={this.onChange}
              value={this.state.department}
            />
          </div>
          <div>
            <input
              placeholder="Salary"
              type="text"
              name="salary"
              onChange={this.onChange}
              value={this.state.salary}
            />
          </div>
          <div>
            <input
              placeholder="Joining Date"
              type="text"
              onFocus={this._onFocus}
              onBlur={this._onBlur}
              name="joining_date"
              onChange={this.onChange}
              value={this.state.joining_date}
            />
          </div>
          <div>
            <input
              placeholder="Date of Birth"
              type="text"
              onFocus={this.Dob_onFocus}
              onBlur={this.Dob_onBlur}
              name="dob"
              onChange={this.onChange}
              value={this.state.dob}
            />
          </div>
          <div>
            <input
              placeholder="Contact"
              type="text"
              name="contact"
              onChange={this.onChange}
              value={this.state.contact}
            />
          </div>
          <div>
            <button type="submit" className="btn submit">
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;
