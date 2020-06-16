import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import axios from 'axios';
import Edit from './Edit';

export class Body extends Component {
    constructor(props){
        super(props)
        this.delete_id=this.delete_id.bind(this)
        this.edit_id=this.edit_id.bind(this)
        this.state={
        employees:[],
        id:''
    }
}
    componentDidMount(){
        axios.get('/api/employee')
        .then(res => {
          const employees = res.data
          console.log(res.data);
          this.setState({employees:employees})
        }) 
      }
       
    delete_id = (employee) => {
        const employee_id = employee.id
        console.log(employee_id)
        axios.delete(`/api/employee/${employee_id}`)
        window.location.reload(false);
    }
     
    edit_id = (employee) =>{
            this.setState({
                id:employee.id
            })
        console.log(this.state)   
    }
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
                    <List employees={this.state.employees} delete_id={this.delete_id} edit_id={this.edit_id} />   
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Body
