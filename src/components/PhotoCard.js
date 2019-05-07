import React from "react";
import { photoCard, picture } from "./PhotoCard.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { connect } from "react-redux";
import actionCreator from "../actions/actions";

const PhotoCard = ({ photo, visibleCards, handleVisibleCard, index }) => {
  const { title, farm, id, server, secret } = photo;
  //Check if card can be made visible after image loaded
  const show = visibleCards.includes(index);
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}`;
  //LazyLoadCOmponent to only load needed components
  return (
    <>
      {photo && (
        <div
          className={photoCard}
          style={{ visibility: `${show && "visible"}` }}
        >
          <LazyLoadComponent threshold={300}>
            <picture
              className={picture}
              alt={title}
              onLoad={() => handleVisibleCard(index)}
            >
              <source media='(min-width: 1200px)' srcSet={`${src}_b.jpg`} />
              <source media='(min-width: 450px)' srcSet={`${src}_z.jpg`} />
              <img src={`${src}_n.jpg`} alt={title} />
              <div>
                <p>{title}</p>
              </div>
            </picture>
          </LazyLoadComponent>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ gallery, photoCard }) => ({
  photos: gallery.photos.photo,
  showGallery: gallery.showGallery,
  visibleCards: photoCard.visibleCards
});

const mapDispatchToProps = dispatch => ({
  //Dispatch action to determine which cards can be made visible after image has loaded
  handleVisibleCard: index => dispatch(actionCreator.visible(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCard);
