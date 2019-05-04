import React from "react";
import PhotoCard from "./PhotoCard";
import { photoGallery } from "./Gallery.module.css";
import { connect } from "react-redux";

const Gallery = props => {
    debugger;
    return (
      <div className={photoGallery}>
        {props.photos &&
          props.photos.map((photo, index) => (
            <PhotoCard
              index={index}
              photo={photo}
              key={`card-photo-${index}`}
            />
          ))}
      </div>
      // TODO: add pagination, make mosaic
    );
  }

const mapStateToProps = state => ({ photos: state.photos.photo });

export default connect(mapStateToProps)(Gallery);
