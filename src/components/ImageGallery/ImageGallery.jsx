import React, { Component } from 'react';
import { ImgGallery } from 'components/ImageGallery/ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import ApiService from 'servises/api';

export class ImageGallery extends Component {
  state = {
    images: [],
    smallImg: '',
    largeImg: '',
    id: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const PrevProps = prevProps.value;
    const NextProps = this.props.value;
    if (PrevProps !== NextProps) {
      const apiService = new ApiService(NextProps);
      apiService.fetchImg().then(data => {
        this.setState({ images: data });
        console.log(data.hits[0]);
      });
    }
  };

  render() {
    return (
      <ImgGallery>
        <ImageGalleryItem images={this.state.images}>Image</ImageGalleryItem>
      </ImgGallery>
    );
  }
}
