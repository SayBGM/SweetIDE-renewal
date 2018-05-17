import React from 'react';
import ProjectFile from '../project_file/ProjectFile'
import LibraryExplore from '../library/library_explore'

export default class ExploreBar extends React.Component {
  render(){
    return (
      <div className="ExploreBar" style={{ display:'inline-block', width:'400px', height:'90vh'}}>
        <ProjectFile />
        <LibraryExplore/>
      </div>
    )
  }
}