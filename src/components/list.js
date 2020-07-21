import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(){
    super();
    this.renderList = this.renderList.bind(this);
  }

  renderList(elem) {
    return elem.map(item => {
      return Object.keys(item).map(dictKey => {
        return ( 
          <div>
            <div key={dictKey} className="row listTitleDiv" >
              
              <div className="listTitle"> {dictKey} </div>
                
              <ul className="listItemUl"> 
                {item[dictKey].map(lst => {
                  return (<li key={lst} className="listListItem"> {lst} </li>);
                })}
              </ul> 

            </div>
          </div>
        );
      })
    })
  }

  render() {
    return (
      <div className="listSection container">
        
        <div className="row">
          <div className="column">
            <div className="listHeader"> {this.props.name} </div>
          </div>
        </div>

        <div className="listText">

          {this.props.stateName.map(elem => {
            return this.renderList(elem);
          })}

        </div>

      </div>
    );
  }
}

List.propTypes = {
  name: PropTypes.string,
  stateName: PropTypes.arrayOf(PropTypes.array)
}

export default List;