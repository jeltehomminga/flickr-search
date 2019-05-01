import React from "react";
import { photoCard, picture } from "./PhotoCard.module.css";

const PhotoCard = props => {
  return (
    <>
      {photo && (
        <div className={photoCard}>
          <picture className={picture}>
            <source
              media='(min-width: 850px)'
              srcSet={`${props.photo.src}_b.jpg`}
            />
            <source
              media='(min-width: 465px)'
              srcSet={`${props.photo.src}_z.jpg`}
            />
            <img src={`${props.photo.src}_n.jpg`} alt='flickr-pic' />
          </picture>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
