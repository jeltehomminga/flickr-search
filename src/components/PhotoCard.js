import React from "react";
import "./PhotoCard.css";

const PhotoCard = props => {
  let photo = props.photo;
  return (
    <>
      {photo && (
        <div className="photo-card">
          <picture className="picture">
            <source media="(min-width: 650px)" srcSet={`${photo.src}_b.jpg`} />
            <source media="(min-width: 465px)" srcSet={`${photo.src}_z.jpg`} />
            <img
              src={`${photo.src}_n.jpg`}
              alt="flickr-pic"
              //   style={{ width: "auto" }}
            />
          </picture>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
