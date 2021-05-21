import React, {Component} from 'react';
import LoginView from './auth/LoginView';
import './static/css/reset.css';
import './static/css/home.css';
class App extends Component{
  render(){
    localStorage.setItem("auth","http://localhost:8080/");
    return (
      <div className="header">
        <LoginView />
      </div>
    )
  }
}


export default App;
