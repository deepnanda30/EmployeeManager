import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Login extends Component {
  /** This is template for Login. On clicking login button , it redirects to '/manage' page */
  render() {
    return (
      <React.Fragment>
        <div className="bg">
          <div className="container ">
            <div className="row login ">
              <div className="col-lg-5 m-auto ">
                <h2 style={{ color: "black" }}>EMPLOYEE MANAGER</h2>
                <div className="card card-body form mt-4 mb-4">
                  <h2>Welcome!</h2>
                  <br />
                  <form>
                    <div>
                      <input placeholder="Email Id" type="text" name="email" />
                    </div>
                    <div>
                      <input
                        placeholder="Password"
                        type="password"
                        name="password"
                      />
                    </div>
                    <br />
                    <Link to="/manage">
                      <button type="submit" className="btn submit">
                        Login
                      </button>
                    </Link>
                    <br />
                  </form>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
