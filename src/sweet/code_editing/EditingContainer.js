import React from 'react';

import TabBox from './tab_box/TabBox';

export default class CenterContainer extends React.Component{
    render(){
        return(
            <div id={'center'} style={{width: 'calc( 100% - 410px )' , display:'inline-block'}}>
                <TabBox fileName={'demo.sweet'} isEdit={'true'}/>
                <TabBox fileName={'Test.sweet'} isEdit={'false'}/>
                <div id={'CodeEditBlock'} style={{padding: '10px'}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}