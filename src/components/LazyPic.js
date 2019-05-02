import React from "react";


const LazyPic = props => {
  return (
    <>
        <source
          media='(min-width: 850px)'
          srcSet={`${props.photo.src}_b.jpg`}
        />
        <source
          media='(min-width: 465px)'
          srcSet={`${props.photo.src}_z.jpg`}
        />
        <img src={`${props.photo.src}_n.jpg`} alt='flickr-pic' />

    </>
  );
};

export default LazyPic;
