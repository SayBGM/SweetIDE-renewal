import React from 'react';
import Navigation from './../../components/SweetIDE/BasicComponents/Navigation';
import Explore from './../../components/SweetIDE/ExploreTab/Explore';
import './SweetIDE.scss';

export default class SweetIDE extends React.Component{
  render(){
    return(
      <div className="SweetIDE">
        <Navigation />
          <div className="SweetIDE__contants">
            <Explore />
          </div>
      </div>
    )
  }
}