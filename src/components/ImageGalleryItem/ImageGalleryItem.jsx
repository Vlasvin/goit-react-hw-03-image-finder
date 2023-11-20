import React, { Component } from 'react';
import {
  ImgGalleryItem,
  ImgItem,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  handleClick = () => {
    const { item, onImageClick } = this.props;
    onImageClick(item.largeImageURL, item.tags);
  };

  render() {
    const { item } = this.props;
    return (
      <ImgGalleryItem>
        <ImgItem
          src={item.webformatURL}
          alt={item.tags}
          onClick={this.handleClick}
        />
      </ImgGalleryItem>
    );
  }
}
