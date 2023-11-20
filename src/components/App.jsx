import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageFinder, ErrorMsg } from './App.styled';
import ApiService from 'services/api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    nameSearch: '',
    images: [],
    page: 1,
    loadMore: false,
    showModal: false,
    isLoader: false,
    modalData: { img: '', tags: '' },
    error: null,
  };

  handleSubmit = nameSearch => {
    this.setState({ nameSearch: nameSearch, page: 1 });
  };

  handleLoadClick = prevState => {
    this.setState({ page: this.state.page + 1 });
  };

  setModalData = (img, tags) => {
    this.setState({ showModal: true, modalData: { img, tags } });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  componentDidUpdate(prevProps, prevState) {
    const PrevState = prevState.nameSearch;
    const NextState = this.state.nameSearch;
    const { page } = this.state;

    if (PrevState !== NextState || page !== prevState.page) {
      this.setState({ isLoader: true, loadMore: false });

      const apiService = new ApiService(NextState, page);
      apiService
        .fetchImg(page)
        .then(images => {
          if (images.hits.length > 0) {
            this.setState(prevState => ({
              images:
                page === 1
                  ? images.hits
                  : [...prevState.images, ...images.hits],
              loadMore: page < Math.ceil(images.totalHits / 12),
            }));
          } else {
            return Promise.reject(
              new Error('Oops... there are no images matching your search...')
            );
          }
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(this.setState({ isLoader: false }));
    }
  }

  render() {
    return (
      <ImageFinder>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {this.state.error && <ErrorMsg>{this.state.error.message}</ErrorMsg>}
        {!this.state.isLoader && (
          <ImageGallery
            loadMore={this.state.loadMore}
            showModal={this.state.showModal}
            images={this.state.images}
            handleLoadClick={this.handleLoadClick}
            closeModal={this.closeModal}
            setModalData={this.setModalData}
            modalData={this.state.modalData}
          ></ImageGallery>
        )}
        {this.state.isLoader && <Loader></Loader>}
      </ImageFinder>
    );
  }
}
