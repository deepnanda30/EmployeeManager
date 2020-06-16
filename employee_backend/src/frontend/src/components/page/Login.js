import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){  
        super(props)  
        this.state={
        email:"",
        password:"",
    }
} 
    render() {
        return (
            <React.Fragment>
            <div className ="bg">
            <div className="container ">
                <div className="row login ">
                <div className="col-lg-5 m-auto ">
                <h2 style={{'color':'black'}}>EMPLOYEE MANAGER</h2>
                <div className="card card-body form mt-4 mb-4">
                    <h2>Welcome!</h2>
                <br/>
                <form onSubmit={this.onSubmit} >
                    <div>
                   <input placeholder="Email Id"  type="text" name="fname" onChange={this.onChange} value={this.state.fname}/>
                   </div>
                   <div>
                   <input placeholder="Password"  type="password" name="fname" onChange={this.onChange} value={this.state.fname}/>
                   </div>
                   <br/>
                   <button type="submit" className="btn  relocate" >
                  Login
                </button>
                <br/>
                </form>
                <br/>
                </div>
                </div>
                </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default Login
