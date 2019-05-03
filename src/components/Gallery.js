import React, { Component } from "react";
import PhotoCard from "./PhotoCard";
import { photoGallery } from "./Gallery.module.css";

class Gallery extends Component {
  render() {
    return (
      <div className={photoGallery}>
        {this.props.photos.length > 0 &&
          this.props.photos.map((photo, index) => {
            return (
              
              <PhotoCard
                index={index}
                photo={photo}
                key={`card-photo-${index}`}
              />

            );
          })}
      </div>
      // TODO: add pagination, make mosaic
    );

  }

};

export default Gallery;
