import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Body from './page/Body';
import Login from './page/Login';
import './App.css';
{/*import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";*/}
class App extends Component{

    render(){
        return(
            <div >
                <Login />
                
            </div>
        )
    }

}

ReactDOM.render(<App />,document.getElementById('app'))