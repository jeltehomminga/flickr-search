import React from "react";
import PhotoCard from "./PhotoCard";
import "./Gallery.css";

const Gallery = props => {
  return (
    <div className="photo-gallery">
      {props.photos.length > 0 &&
        props.photos.map(photo => {
          return <PhotoCard photo={photo} key={`card-photo-${photo.id}`} />;
        })}
    </div>
  );
};

export default Gallery;
