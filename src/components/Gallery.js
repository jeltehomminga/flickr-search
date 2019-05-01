import React from "react";
import PhotoCard from "./PhotoCard";
import { photoGallery } from  "./Gallery.module.css";

const Gallery = props => {
  return (
    <div className={photoGallery}>
      {props.photos.length > 0 &&
        props.photos.map(photo => {
          return <PhotoCard photo={photo} key={`card-photo-${photo.id}`} />;
        })}
    </div>
  );
};

export default Gallery;