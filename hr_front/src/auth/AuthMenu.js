import React, {Component} from 'react'
import $ from 'jquery'
import * as commons from '../static/js/commons'
class AuthMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            token: "",
            refresh: "",
            clicked : false,
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
        var result = commons.ajaxAuthPostCon({
          url: "token",
          id: $(".id").val(),
          pass: $(".pass").val(),
        });
        console.log(result);
        if(result.condition){
          var _this = this;
          _this.setState({
            token: result.accessToken,
            refresh: result.refreshToken,
            ckLogin: true,
          });
      
          localStorage.setItem("token",_this.state.token);
          localStorage.setItem("refresh",_this.state.refresh);
          console.log("localStorage ::: " + localStorage.getItem("token"));
          console.log("state token ::: " + _this.state.token);
          console.log("state ckLogin ::: " + _this.state.ckLogin);
          this.props.viewChange(true);
        }else{
          console.log(result);
          var message = "";
          if(result.message.pass || result.message.id){
            // eslint-disable-next-line no-unused-vars
            for (var [key, value] of Object.entries(result.message)) {
              message += value+ "\n"
            }
            alert(message);
          }else{
            alert(result.message);  
          }
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
      signUpCtrl = () => {
        console.log("회원가입!");
        this.props.signUpCtrl(true);
      }
      componentDidMount(){
        $(".login").click(this.connAuth);
        $(".logout").click(this.doLogout);
        $(".status").click(this.loginStatus);
        $(".signUp").click(this.signUpCtrl);
      }
     
    
      render(){
        console.log("AuthMenu props :::: " + this.props.ckSignUp);
        return(
          <div className="authMenu">
            <input type="text" className="id" placeholder="id입력" />
            <input type="text" className="pass" placeholder="pass입력" />
            <input type="button" className="login" value="로그인" />
            {/* {this.props.ckSignUp ? null: <input type="button" className="signUp" value="회원가입" />} */}
            <input type="button" className="signUp" value="회원가입" />
          </div>
        )
      }
}

export default AuthMenu