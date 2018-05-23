import React from 'react';
import ToastUtils from '../../../core/utils/toaster/ToastUtils'
import Icons from '../../basicComponent/Icons'
import './css/Tool.css'

export default class Tool extends React.Component{
  render() {
    return (
      <div className="Tool" onClick={this._showToast}>
        <Icons icon={this.props.tool} fontsize="20px"/>
      </div>
    )
  }
  _showToast(){
    ToastUtils.showSuccessToast('가즈아아앙아아아ㅏ앙런아런앙낭나아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ')
  }
}
