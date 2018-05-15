import React from 'react';
import { connect } from 'react-redux';

export default class CenterContainer extends React.Component{
    render(){
        return(
            <div id={'center'} style={{ width: 'calc( 100% - 410px )', height : '50vh', display:'inline-block'}}>
                {this.props.children}
            </div>
        )
    }
}