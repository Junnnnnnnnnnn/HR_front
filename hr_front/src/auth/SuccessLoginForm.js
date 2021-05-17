import React,{Component} from 'react'
import $ from 'jquery'

class SuccessLoginForm extends Component{


    logout = () => {
        localStorage.removeItem("token");
        this.props.viewChange(false)
    }

    componentDidMount(){
    
        $("input").click(this.logout);
    }

    render(){
        return(
            <div>
                <span>로그인 완료 </span>
                <input type="button" value="로그아웃" />
            </div>
        )
    }
}

export default SuccessLoginForm