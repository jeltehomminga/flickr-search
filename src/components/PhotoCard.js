import React from "react";
import { photoCard, picture } from "./PhotoCard.module.css";
// import FallBackPic from './FallBackPic'
// import LazyLoad from "react-lazy-load";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import LazyPic from "./LazyPic";

const PhotoCard = props => {
  return (
    <>
      {props.photo && (
        <div className={photoCard}>
        <div className="image-container">

          <LazyLoadImage
            placeholderSrc={`${props.photo.src}_t.jpg`}
            className={picture}
            src={`${props.photo.src}_n.jpg`}
            alt='flickr-pic'
            effect='blur'
            threshold='0'
          />
          </div>
          <div>
            <p>{props.photo.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
