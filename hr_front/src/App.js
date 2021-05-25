import React, {Component} from 'react';
import LoginView from './auth/LoginView';
import SignUpForm from './auth/SignUpForm';
import EmailAccess from './auth/EmailAccess';
import './static/css/reset.css';
import './static/css/home.css';
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      ckSignUp: false,
      ckEmailAccess: false
    };
  }

  signUpCtrl = (val) =>{
    this.setState({
      ckSignUp: val
    });
  }
  emailAccessCtrl = (val) =>{
    this.setState({
      ckEmailAccess: val
    });
  }

  render(){
    localStorage.setItem("auth","http://localhost:8080/");
    return (
      <div className="layout">
        <div className="header">
          <LoginView ckSignUp={this.state.ckSignUp} 
                     signUpCtrl={this.signUpCtrl}
                     ckEmailAccess={this.state.ckEmailAccess}
                     emailAccessCtrl={this.emailAccessCtrl}/>
        </div>
        <div className="content">
          {this.state.ckSignUp?<SignUpForm 
                                  ckSignUp={this.state.ckSignUp}
                                  signUpCtrl={this.signUpCtrl} 
                                  ckEmailAccess={this.state.ckEmailAccess}
                                  emailAccessCtrl={this.emailAccessCtrl}/>:""}
          {this.state.ckEmailAccess?<EmailAccess 
                                      ckEmailAccess={this.state.ckEmailAccess}
                                      emailAccessCtrl={this.emailAccessCtrl}/>:""}
        </div>
      </div>
    )
  }
}


export default App;
