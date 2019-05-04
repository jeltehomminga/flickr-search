import React, { Component } from "react";
import { photoCard, picture } from "./PhotoCard.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";

class PhotoCard extends Component {
  state = { isHidden: true };
  setImageSrc = e => {
    this.setState({
      isHidden: false
    });
  };
  render() {
    const { src, title, index } = this.props.photo;
    return (
      <>
        {this.props.photo && (
          <div
            className={photoCard}
            style={{
              visibility: `${this.state.isHidden ? "hidden" : "visible"}`
            }}
          >
            <LazyLoadComponent threshold={index < 7 ? 500 : 300}>
              <div className='image-container'>
                <picture className={picture} onLoad={() => this.setImageSrc()}>
                  <source
                    media='(min-width: 1050px)'
                    srcSet={`${src}_b.jpg`}
                  />
                  <source
                    media='(min-width: 780px)'
                    srcSet={`${src}_z.jpg`}
                  />
                  <img src={`${src}_n.jpg`} alt='flickr-pic' />
                  <div>
                    <p>{title}</p>
                  </div>
                </picture>
              </div>
            </LazyLoadComponent>
          </div>
        )}
      </>
    );
  }
}

export default PhotoCard;
