import React, {Component} from 'react'
import $ from 'jquery'
import * as commons from '../static/js/commons'

class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: "",
            ckLogin: false
        }
        if(localStorage.getItem("token")){
            this.state = {
              token: localStorage.getItem("token"),
              ckLogin: true,
            }
        }
    }
    connAuth = () => {
        var result = commons.ajaxPostCon({
          url: "http://localhost:8080/token",
          api_key: '1234',
          id: $(".id").val(),
          pass: $(".pass").val(),
        });
        console.log(result);
        if(result.condition){
          var _this = this;
          _this.setState({
            token: result.token,
            ckLogin: true,
          });
      
          localStorage.setItem("token",_this.state.token);
          console.log("localStorage ::: " + localStorage.getItem("token"));
          console.log("state token ::: " + _this.state.token);
          console.log("state ckLogin ::: " + _this.state.ckLogin);
          this.props.viewChange(true)
        }else{
            alert(result.message);
        }
      }
    
      loginStatus = () => {
        console.log("state token ::: " + this.state.token);
        console.log("state ckLogin ::: " + this.state.ckLogin);
      }
    
      doLogout = () => {
        localStorage.removeItem("token");
        this.setState({
          token: "",
          ckLogin: false,
        });
      }
      
    
    
      componentDidMount(){
        $(".login").click(this.connAuth);
        $(".logout").click(this.doLogout);
        $(".status").click(this.loginStatus);
    
      }
     
    
      render(){
        return(
          <div className="loginForm">
            <input type="text" className="id" placeholder="id입력"></input>
            <input type="text" className="pass" placeholder="pass입력"></input>
            <input type="button" className="login" value="로그인" />
            <input type="button" className="logout" value="로그아웃" />
            <input type="button" className="status" value="status" />
          </div>
        )
      }
}

export default LoginForm