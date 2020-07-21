import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkImages from './linkImages';
import Carousel from './carousel';

class TextSection extends Component {
  constructor(){
    super();
    this.renderLinkImgDiv = this.renderLinkImgDiv.bind(this);
    this.renderText = this.renderText.bind(this);
  }

  renderLinkImgDiv (obj) {
    let name=obj.name;
    let link=obj.link;
    let img=obj.img;

    return(
      <LinkImages key={link} name={name} link={link} img={img} />
    );    
  }

  renderText(elem) {
    
    return elem.map(miniDict => { 
      
      const indKey = Object.keys(miniDict)[0];
      const indVal = miniDict[indKey];
    
      if(indKey ==="first" || indKey==="none"){
        
        return ( 
          <div className="row">
            <div key={indVal} className="column">
              <div className={indKey}>{indVal} </div> 
            </div>
          </div>
        );
      } else if (indKey ==="img"){
        let imgList = indVal["img"];
    
        return(
          <Carousel key={elem[indKey]} name={this.props.name} imgList={imgList} carouselInfo={miniDict[indKey]} />
        );
      } else if (indKey==="linkImg"){
        
        return(
          <div className="textLinkImgDiv row">
            {indVal.map(obj => {
              return this.renderLinkImgDiv(obj);
            })}
          </div>
        );
      } else if (indKey === "third") {

        const dictKey = Object.keys(indVal)[0];
        const dictVal = indVal[dictKey];
        
        const li = dictVal.map(item => {
          
          return (<li key={item} className="textList column"> {item} </li>);
        });

        return(
          <div className="subSectionDiv">
            <div className="subSection">
              <div className="row">

                <div className="thoughtSection column"> 
                  <div className="thirdTitle"> {dictKey} </div>
                  <div> <ul className="thirdUl"> {li} </ul></div>
                </div>

              </div>
            </div>
          </div>
        );
      } else {
      
        const li = miniDict[indKey].map(item => {
          
          return (<li key={item} className="textList"> {item} </li>);
        });

        return (
          <div key={indVal} className="textDict">
            <ul> <span className="textListHeader"> {indKey} </span> {li} </ul>
          </div>
        );
      } 
    });
  }

  render() {
    let cls = `textSection container ${this.props.name}`;
    return (
      <div className={cls}>

        <div className="row" >
          <div className="column"> 
            <div className="textHeader"> {this.props.name} </div> 
          </div>
        </div>

        <div className="textText">
          {this.props.stateName.map(elem => {
            return this.renderText(elem);
          })}
        </div>
        
      </div>
    );
  }
}

TextSection.propTypes = {
  name: PropTypes.string,
  stateName: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object))
}
export default TextSection;