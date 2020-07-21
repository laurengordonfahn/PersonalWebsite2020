import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkImages extends Component {
 

  render() {
    return (
      
      <div className="imgLinkDiv">  
        <a  key={this.props.link} className="imgLinkAnchor " href={this.props.link} title={this.props.name}>
         
          <img className="linkImg" src={this.props.img} alt={this.props.name} title={this.props.name}/> 
        </a>
      </div>
    );
  }
}

LinkImages.propTypes = {
    link: PropTypes.string,
    name: PropTypes.string
}
export default LinkImages;