import React from 'react';
import ProjectFile from './ProjectFile/ProjectFile'
import LibraryExplore from './Library/LibraryExplore'

export default class ExploreBar extends React.Component {
  render(){
    return (
      <div className="ExploreBar" style={{ position: 'relative', top: '-4%', display:'inline-block', width:'400px', height:'90vh'}}>
        <ProjectFile />
        <LibraryExplore/>
      </div>
    )
  }
}