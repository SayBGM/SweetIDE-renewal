import React from 'react';
import InputText from '../common/InputText';
import AccountSubmitBtn from '../common/AccountSubmitBtn';
import './css/signinInputWrapper.css';
import axios from 'axios';
import {setCookie} from '../../../core/utils/cookie/index';
import ToastUtils from '../../../core/utils/toaster/ToastUtils';

class SigninInputWrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
    };
    this.onIdChange = this.onIdChange.bind(this);
    this.onPwChange = this.onPwChange.bind(this);
  }
  render() {
    return (
      <form id="signin-input-wrapper" onSubmit={(e) => {e.preventDefault(); this.Submit()}}>
          <InputText placeholder="아이디" type="text" onChange={this.onIdChange}/>
          <InputText placeholder="비밀번호" type="password" onChange={this.onPwChange}/>
          <AccountSubmitBtn text="로그인"/>
      </form>
    )
  }
  onIdChange(text) {
    this.setState({
      id: text,
    });
  }
  onPwChange(text) {
    this.setState({
      pw: text,
    });
  }
  Submit() {
    const { id, pw } = this.state;
    axios.post('http://13.209.89.250/account/login', {
      id,
      pw
    }).then((res) => {
      setCookie('accessToken', res.data.accessToken, 1);
      setCookie('refreshToken', res.data.refreshToken, 5);
    }).catch(() => {
      ToastUtils.showErrorToast('잘못된 비밀번호입니다,');
    })
  }
}

export default SigninInputWrapper;