import React from 'react';

import TabBox from './TabBox/TabBox';
import ToolBox from './Tools/ToolBox'

export default class CenterContainer extends React.Component{
    render(){
        return(
            <div id='center' style={{width: 'calc( 100% - 410px )' , display:'inline-block'}}>
                    
                    <TabBox fileName={'demo.sweet'} isEdit={'false'}/>
                    <TabBox fileName={'Test.sweet'} isEdit={'true'}/>
                    <ToolBox/>
                <div id={'CodeEditBlock'} style={{padding: '10px'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}