import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkImages from './linkImages';

class Carousel extends Component {
  constructor(){
    super();
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.renderCarouselImg = this.renderCarouselImg.bind(this);
    this.renderLinkImgDiv = this.renderLinkImgDiv.bind(this);
    this.state = {
      isCurrent: 0
    };
  }

  handleBackwardClick(e, lenCarousel) {
      
    let current = this.state.isCurrent;
    
    if ((current - 1) !== -1) {
      current = (current - 1)%lenCarousel;
      this.setState({isCurrent: current});
    } 
    else{ 
      current = (lenCarousel -1);
      this.setState({isCurrent: current});
    }
  }

  handleForwardClick(e, lenCarousel) {
  
    let current = this.state.isCurrent;
    
    current = (current + 1)%lenCarousel;
    this.setState({isCurrent: current});
  }

  renderCarouselImg(img, i) {
    let isCurrent = this.state.isCurrent;
    let cls = `carouselImg column column-60 column-offset-20 ${i === isCurrent ? "isSeen": "isNotSeen"}`;
    return ( 
      <li key={img} className={cls}>
        <img src={img} alt={img} />
      </li>
    );
  }

  renderLinkImgDiv(linkImg){
    let name=linkImg.name;
    let byline=linkImg.byline;
    let link=linkImg.link;
    let img=linkImg.img;

    return(
      <div key={link} className="carouselLinkImgDiv">
        <LinkImages name={name} byline={byline} link={link} img={img} />
      </div>
    );    
  }

  render() {
    let lenCarousel = this.props.imgList.length;
    if (lenCarousel > 1){
      return (
        <div>
          <ul className="imgCarouselList row">

            {this.props.imgList.map((img, i) => {
              return this.renderCarouselImg(img, i);
            })}

          </ul>

          <div className="btnCarouselDiv">
            <div className="button btnbackwardImg" onClick={e => {this.handleBackwardClick(e, lenCarousel);} }> &larr; </div>
            <div className="button btnforwardImg" onClick={e => {this.handleForwardClick(e, lenCarousel);} } >  &rarr;  
            </div>
         
            {this.props.carouselInfo.linkImg.map(linkImg => { return this.renderLinkImgDiv(linkImg)})}
          </div>

        </div>   
      );
    } else {
      
      return (
        <div>
         
          <ul className="imgCarouselList row">
            {this.props.imgList.map((img, i) => {
              return this.renderCarouselImg(img, i);
            })}
          </ul>

          <div className="carouselLinkBtnDiv row">
              {this.props.carouselInfo.linkImg.map(linkImg => { return this.renderLinkImgDiv(linkImg)})}
          </div>

        </div>
      );
    }
  }
}
//check imgList
Carousel.propTypes = {
  name: PropTypes.string,
  imgList: PropTypes.arrayOf(PropTypes.string),
  carouselInfo: PropTypes.object
}

export default Carousel;
