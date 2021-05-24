import React,{Component} from 'react';
import $ from 'jquery';
import * as common from '../static/js/commons';

class SignUp extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    signUpCtrl = () =>{
        this.props.signUpCtrl(false);
    }
    postData = () =>{
        // common.ajaxAuthPostCon({
        //     // url: 
        // });
    }
    componentDidMount(){
        $("#cancel").click(this.signUpCtrl);
        $("#submit").click(this.postData);
    }

    render(){
        return(
            <div className="signUpForm">
                <ul>
                    <li><strong>아이디 :</strong><input type="text" id="member_id" /></li>
                    <li><strong>이름 :</strong><input type="text" id="member_name" /></li>
                    <li><strong>비밀번호 :</strong><input type="password" id="member_pass"/></li>
                    <li><strong>전화번호 :</strong><input type="text" id="member_phone"/></li>
                    <li><strong>프로필 :</strong><input type="file" id="member_photo"/></li>
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