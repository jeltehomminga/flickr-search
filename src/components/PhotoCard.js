import React from "react";
import { photoCard, picture } from "./PhotoCard.module.css";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { connect } from "react-redux";

const PhotoCard = props => {
  const { title, farm, id, server, secret } = props.photo;
  const show = props.visibleCards.includes(props.index);
  const src = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}`;
  return (
    <>
      {props.photo && (
        <div
          className={photoCard}
          style={{
            visibility: `${show && "visible"}`
          }}
        >
          <LazyLoadComponent threshold={300}>
              <picture
                className={picture}
                onLoad={() => props.handleVisibleCard(props.index)}
              >
                <source media='(min-width: 1200px)' srcSet={`${src}_b.jpg`} />
                <source media='(min-width: 450px)' srcSet={`${src}_z.jpg`} />
                <img src={`${src}_n.jpg`} alt='flickr-pic' />
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

const mapStateToProps = state => ({
  photos: state.gallery.photos.photo,
  showGallery: state.gallery.showGallery,
  visibleCards: state.photoCard.visibleCards
});

const mapDispatchToProps = dispatch => ({
  handleVisibleCard: index => dispatch({ type: "VISIBLE", index: index })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoCard);
