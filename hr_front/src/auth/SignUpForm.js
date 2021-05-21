import React,{Component} from 'react'
import $ from 'jquery'

class SignUp extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    signUpCtrl = () =>{
        this.props.signUpCtrl(false);
    }
    componentDidMount(){
        $("#cancel").click(this.signUpCtrl);
    }

    render(){
        return(
            <div className="signUpForm">
                <ul>
                    <li><strong>아이디 :</strong><input type="text" id="member_id" /></li>
                    <li><strong>비밀번호 :</strong><input type="password" id="member_pass"/></li>
                    <li><strong>전화번호 :</strong><input type="text" id="member_phone"/></li>
                    <li><strong>프로필 :</strong><input type="text" id="member_photo"/></li>
                </ul>
                <div>
                    <input type="button" id="cancel" value="취소" />
                    <input type="button" id="submit" value="가입" />
                </div>
            </div>
        )
    }
}

export default SignUp