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
        if(result.condition){
          var _this = this;
          _this.setState({
            token: result.accessToken,
            refresh: result.refreshToken,
            ckLogin: true,
          });
      
          localStorage.setItem("token",_this.state.token);
          localStorage.setItem("refresh",_this.state.refresh);
          this.props.viewChange(true);
          this.props.signUpCtrl(false);
          this.props.emailAccessCtrl(false);
        }else{
          var message = "";
          if(result.message.pass || result.message.id){
            // eslint-disable-next-line no-unused-vars
            for (var [key, value] of Object.entries(result.message)) {
              message += value+ "\n"
            }
            alert(message);
          }else{
            console.log(result);
            alert(commons.makeJSON(result.message).message);
            if(commons.makeJSON(result.message).code == "002"){
              this.emailAccessCtrl();
            }
          }
        }
      }
      doLogout = () => {
        localStorage.removeItem("token");
        this.setState({
          token: "",
          ckLogin: false,
        });
      }
      signUpCtrl = () => {
        this.props.signUpCtrl(true);
      }
      emailAccessCtrl = () => {
        this.props.emailAccessCtrl(true);
      }
      componentDidMount(){
        $(".login").click(this.connAuth);
        $(".logout").click(this.doLogout);
        $(".signUp").click(this.signUpCtrl);
      }
     
    
      render(){
        console.log("AuthMenu props :::: " + this.props.ckSignUp);
        return(
          <div className="authMenu">
            <input type="text" className="id" placeholder="id입력" />
            <input type="text" className="pass" placeholder="pass입력" />
            <input type="button" className="login" value="로그인" />
            <input type="button" className="signUp" value="회원가입" />
          </div>
        )
      }
}

export default AuthMenu