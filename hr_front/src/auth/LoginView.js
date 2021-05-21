import React,{Component} from 'react';
import AuthMenu from './AuthMenu';
import SuccessLoginForm from './SuccessLoginForm';
import * as commons from '../static/js/commons'
class LoginView extends Component{

    constructor(props){
        super(props);
        this.state = {
            token: localStorage.getItem("token")? commons.refreshAccessToken() : "",
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
        console.log("LOGINVIEW props :::: " + this.props.ckSignUp);
        if(localStorage.getItem("token")){
            return <SuccessLoginForm token={this.state.token} viewChange={this.viewChange}/>
        }else{
            return <AuthMenu token={this.state.token} viewChange={this.viewChange} ckSignUp={this.props.ckSignUp} signUpCtrl={this.props.signUpCtrl}/>
        }
    }
}

export default LoginView