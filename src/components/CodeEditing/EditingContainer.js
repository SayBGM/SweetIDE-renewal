import React from 'react';
import { connect } from 'react-redux';
import SeiralMoniter from './../SeiralMoniter/SeiralMoniter'
import TabBox from './TabBox/TabBox';
import ToolBox from './Tools/ToolBox'

class CenterContainer extends React.Component{
    render(){
        const tablist = this.props.Tabs.map((Tab) => {
            return <TabBox fileName={Tab.name} isEdit={Tab.isEdit} key={Tab.name}/>
        })
        return(
            <div id='center' style={{width: 'calc( 100% - 410px )' , display:'inline-block', position:'relative', top: '-10px'}}>
                    <span className='error'>현재 창 크기로는 정상적인 코드 에디팅이 불가능합니다. 창을 키워주세요.</span>
                    {tablist}
                    <ToolBox/>
                <div id={'CodeEditBlock'} style={{padding: '10px'}}>
                    {this.props.children}
                </div>
                <SeiralMoniter />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        Tabs : state.tabReducer.Tabs
    }
}

export default connect(mapStateToProps)(CenterContainer)