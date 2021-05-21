import React, {Component} from 'react';
import LoginView from './auth/LoginView';
import SignUpForm from './auth/SignUpForm';
import './static/css/reset.css';
import './static/css/home.css';
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      ckSignUp: false
    };
  }

  signUpCtrl = (val) =>{
    console.log("signUpCtrl vla :::: ");
    console.log(val);
    this.setState({
      ckSignUp: val
    });
    console.log("setState");
  }

  render(){
    localStorage.setItem("auth","http://localhost:8080/");
    return (
      <div className="layout">
        <div className="header">
          <LoginView ckSignUp={this.state.ckSignUp} signUpCtrl={this.signUpCtrl}/>
        </div>
        <div className="content">
          {this.state.ckSignUp?<SignUpForm ckSignUp={this.state.ckSignUp} signUpCtrl={this.signUpCtrl}/>:""}
        </div>
      </div>
    )
  }
}


export default App;
