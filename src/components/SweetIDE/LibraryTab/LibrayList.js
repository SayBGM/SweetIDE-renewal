import React from 'react';
import ModuleList from './ModuleList';
import './css/LibrayList.scss';

export default class LibrayList extends React.Component {
  render() {
    return (
      <div className="LibrayList">
        {this.props.isAddOpen ? 
          <div className="LibrayList__defineadd">
            #define <input type="text" className="LibrayList__defineadd__input"/>
          </div> :
          ""
        }
        <ModuleList/>
      </div>
    )
  }
}