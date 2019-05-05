import React, { Component } from "react";
import { photoCard, picture } from "./PhotoCard.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { connect } from "react-redux";

class PhotoCard extends Component {
  state = { isHidden: true };
  setImageSrc = e => {
    this.setState({
      isHidden: false
    });
  };
  render() {
    const { title, farm, id, server, secret } = this.props.photo;
    const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}`;
    return (
      <>
        {this.props.photo && (
          <div
            className={photoCard}
            style={{
              visibility: `${this.state.isHidden ? "hidden" : "visible"}`
            }}
          >
            <LazyLoadComponent threshold={150}>
              <div className='image-container'>
                <picture className={picture} onLoad={() => this.setImageSrc()}>
                  <source media='(min-width: 1200px)' srcSet={`${src}_b.jpg`} />
                  <source media='(min-width: 450px)' srcSet={`${src}_z.jpg`} />
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

const mapStateToProps = state => ({
  photos: state.photos.photo,
  showGallery: state.showGallery
});

export default connect(mapStateToProps)(PhotoCard);
