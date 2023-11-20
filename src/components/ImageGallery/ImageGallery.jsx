import React, { Component } from 'react';
import { ImgGallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class ImageGallery extends Component {
  render() {
    const {
      images,
      handleLoadClick,
      loadMore,
      modalData,
      setModalData,
      closeModal,
      showModal,
    } = this.props;

    return (
      <>
        <ImgGallery>
          {images?.map(image => (
            <ImageGalleryItem
              key={image.id}
              item={image}
              tags={image.tags}
              onImageClick={() => setModalData(image.largeImageURL, image.tags)}
            />
          ))}
        </ImgGallery>
        {loadMore && <Button onClick={handleLoadClick}></Button>}
        {showModal && (
          <Modal modalData={modalData} closeModal={closeModal}></Modal>
        )}
      </>
    );
  }
}
