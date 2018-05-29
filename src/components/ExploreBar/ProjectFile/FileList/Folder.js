import React from 'react';
import Icons from './../../../basicComponent/Icons';
import File from './File'

export default class Folder extends React.Component{
  state = {
    isOpen: true,
  }
  render(){
    const filedirectory = this.props.folder.subdirectory.map((file) => {
      if(file.isFile){
        return <File file={file.filename} highfolder={file.highfolder} key={file.filename}/>
      }
      else{
        return <Folder folder={file} key={file.name}/>
      }
    })
    return (
      <div className="Folder" style={{marginLeft:'20px'}}>
        <span 
          style={{color:"#777777", cursor:"pointer"}} 
          onClick={() => {
            let files = document.getElementsByClassName(`${this.props.folder.name}-File`);
            if(this.state.isOpen){
                for(let i = 0; i<files.length; i++){
                files[i].style.display = 'none';
              }
              this.setState({isOpen:false});
            }else{
                for(let i = 0; i<files.length; i++){
                files[i].style.display = 'block';
              }
              this.setState({isOpen:true});
            }
            }}>
            <Icons icon="folder-open" margin="4px" fontsize="20px"/><span style={{color:"#000"}}>{this.props.folder.name}</span></span>
        {filedirectory}
      </div>
    )
  }
}