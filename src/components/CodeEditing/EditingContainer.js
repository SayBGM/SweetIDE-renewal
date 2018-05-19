import React from 'react';
import SeiralMoniter from './../SeiralMoniter/SeiralMoniter'
import TabBox from './TabBox/TabBox';
import ToolBox from './Tools/ToolBox'

export default class CenterContainer extends React.Component{
    render(){
        return(
            <div id='center' style={{width: 'calc( 100% - 410px )' , display:'inline-block', position:'relative', top: '-10px'}}>
                    <span className='error'>현재 창 크기로는 정상적인 코드 에디팅이 불가능합니다. 창을 키워주세요.</span>
                    <TabBox fileName={'demo.sweet'} isEdit={'false'}/>
                    <TabBox fileName={'Test.sweet'} isEdit={'true'}/>
                    <ToolBox/>
                <div id={'CodeEditBlock'} style={{padding: '10px'}}>
                    {this.props.children}
                </div>
                <SeiralMoniter />
            </div>
        )
    }
}