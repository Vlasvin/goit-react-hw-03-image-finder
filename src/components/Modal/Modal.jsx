import React, { Component } from 'react';
import {
  ModalOverlay,
  ModalWindow,
  ModalImg,
} from 'components/Modal/Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { modalData } = this.props;
    return (
      <ModalOverlay onClick={this.handleBackdropClick}>
        <ModalWindow>
          <ModalImg src={modalData.img} alt={modalData.tags} />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}
