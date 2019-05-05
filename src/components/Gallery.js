import React from "react";
import PhotoCard from "./PhotoCard";
import Pagination from "./Pagination";
import { photoGallery } from "./Gallery.module.css";
import { connect } from "react-redux";

const Gallery = props => {
  const { photos, showGallery } = props;
  return (
    <div className={photoGallery}>
      {photos && showGallery && (
        <>
          {photos.map((photo, index) => (
            <PhotoCard
              index={index}
              photo={photo}
              key={`card-photo-${index}`}
            />
          ))}
          <Pagination nextPage={photos.length > 98 ? true : false} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  photos: state.gallery.photos.photo,
  showGallery: state.gallery.showGallery
});

export default connect(mapStateToProps)(Gallery);
