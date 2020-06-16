import React from 'react';
{/*import {Link} from "react-router-dom";*/}

const Employees = ({employees,delete_id,edit_id}) => {
  return (
    <div >
        <table className="table table-striped table-dark ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              <th>Department</th>
              <th>Edit on Double Click</th>
              <th>Delete</th> 
            </tr>
          </thead>
        <tbody>
        {employees.map((employee)=>(
            <tr key={employee.id}>
            <td>{employee.id}</td>
            <td className="table-item">{employee.fname} {employee.lname}</td>
            <td>{employee.email}</td>
            <td className="table-item">{employee.position}</td>
            <td className="table-item">{employee.department}</td>
            <td>
              <i className=" fa fa-pencil " onClick={()=>edit_id(employee)} >
              </i>
            </td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={()=>delete_id(employee)}>
                <i className="fa fa-trash-o"></i>
              </button>
           
            </td>
          </tr>

        ))}
        </tbody>
        </table>
      </div>
  )
}

export default Employees;

