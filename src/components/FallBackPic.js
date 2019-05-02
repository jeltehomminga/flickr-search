import React from "react";

const FallBackPic = props => {
  return <img src={`${props.photo.src}_t.jpg`} alt='flickr-pic' />;
};

export default FallBackPic;
