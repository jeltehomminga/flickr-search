import React, { Component } from "react";
import PhotoCard from "./PhotoCard";
import { photoGallery } from "./Gallery.module.css";

class Gallery extends Component {
  render() {
    const { photos, renderGallery } = this.props;
    return (
      <div className={photoGallery}>
        {photos.length > 0 &&
          photos.map((photo, index) => {
            return (           
              
              <PhotoCard
                index={index}
                photo={photo}
                key={`card-photo-${index}`}
                renderPhotoCard={ renderGallery }
              />

            );
          })}
      </div>
      // TODO: add pagination, make mosaic
    );

  }

};

export default Gallery;
