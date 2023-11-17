import React, { Component } from 'react';
import {
  ImgGalleryItem,
  ImgItem,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  render() {
    const images = this.props.images;
    console.log(images.hits[0].id);
    return (
      <ImgGalleryItem>
        <ImgItem src="" alt="" />
      </ImgGalleryItem>
    );
  }
}

export default ImageGalleryItem;
