import React, { Component } from 'react';
import {
  ModalOverlay,
  ModalWindow,
  ModalImg,
} from 'components/Modal/Modal.styled';

export class Modal extends Component {
  render() {
    return (
      <ModalOverlay>
        <ModalWindow>
          <ModalImg src="" alt="" />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}

export default Modal;
