import React from 'react';
import Proptypes from 'prop-types';
import CodeMirrorCPP from './CodeMirror/CodeMirrorCPP';
import { connect } from 'react-redux';
import SeiralMoniter from './../SeiralMoniter/SeiralMoniter';
import TabBox from './TabBox/TabBox';
import ToolBox from './Tools/ToolBox';

class CenterContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            EditingTab : 0,
        }
    }
    
    render(){
        return(
            <div id='center' style={{width: 'calc( 100% - 410px )' , display:'inline-block', position:'relative', top: '-10px'}}>
                    <span className='error'>현재 창 크기로는 정상적인 코드 에디팅이 불가능합니다. 창을 키워주세요.</span>
                    {this.renderTabBox()}
                    <ToolBox/>
                <div id={'CodeEditBlock'} style={{padding: '10px'}}>
                    <CodeMirrorCPP SelectTab={this.state.EditingTab}/>
                </div>
                <SeiralMoniter />
            </div>
        )
    }
    handelTabClickEevent = (index) =>{
        this.setState({
            EditingTab: index
        });
    }
    renderTabBox = _ => {
        const data = this.props.tabReducer.Tabs;
        return data.map((tab, index) =>{
            const isEdit = this.state.EditingTab === index ? true : false;
            return <TabBox  key = {index}
                            index = {index}
                            fileName = {tab.name} 
                            isEdit = {isEdit}
                            handelTabClickEevent = {this.handelTabClickEevent}
                            />
        })
    }
}

function mapStateToProps (state){
    return {
        tabReducer : state.tabReducer
    }
}
CenterContainer.Proptypes = {
    CenterContainer: Proptypes.func.isRequired
}
export default connect (mapStateToProps)(CenterContainer)