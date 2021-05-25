import React, {Component} from 'react';
import $ from 'jquery';
import * as commons from '../static/js/commons';

class EmailAccess extends Component{

    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    postDate = () =>{
        var result = commons.ajaxAuthPostCon({
            url: "ckEmailToken",
            token: $("#token").val()
        });

        if(result.condition){
            var message = commons.makeJSON(result.message);
            alert(message.message);
            this.props.emailAccessCtrl();
        }
    }
    
    componentDidMount(){
        $("#submit").click(this.postDate);
    }

    render(){
        return(
            <div>
                <p>메일로 인증 코드가 발송 되었습니다</p>
                <p>인증 코드을 입력해 주세요</p>
                <input type="text" id="token" />
                <input type="button" id="submit" value="인증" />
            </div>
        )
    }

}

export default EmailAccess