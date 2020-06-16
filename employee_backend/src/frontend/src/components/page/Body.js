import React, { Component } from "react";
import Add from "./Add";
import List from "./List";
import Edit from "./Edit";
import axios from "axios";

export class Body extends Component {
  constructor(props) {
    super(props);
    this.delete_id = this.delete_id.bind(this);
    this.edit_id = this.edit_id.bind(this);
    this.state = {
      employees: [],
      id: "",
    };
  }
  /* On loading of Body component, axios get request is made to display list of Employees */
  componentDidMount() {
    axios.get("/api/employee").then((res) => {
      const employees = res.data;
      console.log(res.data);
      this.setState({ employees: employees });
    });
  }

  /*
   delete_id function takes the employee object as parameter and employee.id is used to send
   axios delete to the select employee.
   delete_id function is called in List.Js page and is an onClick event.  
   window.location.reload(false) reloads the page so that the changes are displayed in the list
  */
  delete_id = (employee) => {
    const employee_id = employee.id;
    console.log(employee_id);
    axios.delete(`/api/employee/${employee_id}`);
    window.location.reload(false);
  };

  /*
   edit_id function takes the employee object as parameter and employee.id is update state of 'id'.
   edit_id function is called in List.Js page and is an onClick event.  
  */
  edit_id = (employee) => {
    this.setState({
      id: employee.id,
    });
    console.log(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h4>Employee Manager </h4>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-lg-5 mr-5 mx-5">
              <Add />
            </div>

            <div className="ml-5 col-lg-5">
              <Edit id={this.state.id} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <List
                employees={this.state.employees}
                delete_id={this.delete_id}
                edit_id={this.edit_id}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
