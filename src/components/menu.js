import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Scroll = require('react-scroll');

var Link = Scroll.Link;


class Menu extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.renderPageOptions = this.renderPageOptions.bind(this);
  }

  handleClick(e){
    this.props.handleClick(e.target.value);
  }

  renderPageOptions(elem) {
    
    return(
      <Link key={elem} activeClass="active" to={elem} spy={true} smooth={true} offset={this.props.offSetVal} duration={500} onSetActive={this.handleSetActive} >

        <button className="menuButton button" onClick={e => {this.handleClick(e);}} type="button" value={elem}> {elem} </button>
      </Link>
    );
  }
  
  render() {
    return (
      <div  className={this.props.isTop ? "menuStart" : "menuTop"}  >

        {this.props.pageSections.map(elem => {
          return this.renderPageOptions(elem);
        })}
        
      </div>
    );
  }
}

Menu.propTypes = {
  isTop: PropTypes.bool,
  pageSelections: PropTypes.array,
  offSet: PropTypes.number
}

export default Menu;