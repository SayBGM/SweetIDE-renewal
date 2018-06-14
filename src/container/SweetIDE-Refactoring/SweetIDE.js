import React from 'react';
import Navigation from './../../components/SweetIDE/BasicComponents/Navigation';
import Explore from './../../components/SweetIDE/ExploreTab/Explore';
import LibraryTab from './../../components/SweetIDE/LibraryTab/LibrayTab';
import CodeEditer from './../../components/SweetIDE/CodeEditer/CodeEditer';
import './SweetIDE.scss';

export default class SweetIDE extends React.Component{
  render(){
    return(
      <div className="SweetIDE" style={{width:window.screen.width}}>
        <Navigation />
          <div className="SweetIDE__contants">
            <div style={{float:'left'}}>
              <Explore />
              <LibraryTab />
            </div>
            <CodeEditer />
          </div>
      </div>
    )
  }
}