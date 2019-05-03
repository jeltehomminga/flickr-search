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
    return (
      <>
        {this.props.photo && (
          <div
            className={photoCard}
            style={{
              visibility: `${this.state.isHidden ? "hidden" : "visible"}`
            }}
          >
            <div className='image-container'>
              <LazyLoadComponent threshold={0}>
                <picture className={picture} onLoad={() => this.setImageSrc()}>
                  <source
                    media='(min-width: 1050px)'
                    srcSet={`${this.props.photo.src}_b.jpg`}
                  />
                  <source
                    media='(min-width: 780px)'
                    srcSet={`${this.props.photo.src}_z.jpg`}
                  />
                  <img src={`${this.props.photo.src}_n.jpg`} alt='flickr-pic' />
                </picture>
              </LazyLoadComponent>
              <div>
                <p>{this.props.photo.title}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default PhotoCard;
