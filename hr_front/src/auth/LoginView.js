import React,{Component} from 'react'
import LoginForm from './LoginForm'
import SuccessLoginForm from './SuccessLoginForm'

class LoginView extends Component{

    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem("token")? localStorage.getItem("token") : ""
        }
    }

    viewChange = (condition) =>{
        if(condition){
            this.setState({token: localStorage.getItem("token")});
        }else{
            this.setState({token: ""});
        }
    }

    render(){
        console.log("LoginView ::: " + this.state.token);
        if(localStorage.getItem("token")){
            return <SuccessLoginForm token={this.state.token} viewChange={this.viewChange}/>
        }else{
            return <LoginForm token={this.state.token} viewChange={this.viewChange}/>
        }
    }
}

export default LoginView