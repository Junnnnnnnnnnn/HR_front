import React, {Component} from 'react';
import LoginView from './auth/LoginView';
class App extends Component{
  render(){
    return (
      <div className="header">
        <LoginView />
      </div>
    )
  }
}


export default App;
