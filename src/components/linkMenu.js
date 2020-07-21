import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkMenu extends Component {
  constructor() {
    super();
    this.renderLinkOptions = this.renderLinkOptions.bind(this);
  }

  renderLinkOptions(elem) {
    
    let name=elem[0]["name"];
    let link=elem[0]["link"];
    let img= elem[0]["img"];

    return(
      <li key={name} className="linkDiv">
        
        <a key={name} className="anchorLink" href={link}>
          <img className="linkImg" src={img} alt={name} />  
          <span className="linkTitle">{name} </span>
          < br/>
        </a>

      </li>
    );
  }

  render() {
    return (
      <ul className="linkMenu">
        
        {this.props.linkOptions.map(elem => {
          return this.renderLinkOptions(elem);
        })}
        
      </ul>
    );
  }
}

LinkMenu.propTypes = {
  linkOptions: PropTypes.arrayOf(PropTypes.array)
}

export default LinkMenu;