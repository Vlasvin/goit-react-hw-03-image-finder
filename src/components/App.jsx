import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { ImageFinder } from './Searchbar/Searchbar.styled';

export class App extends Component {
  state = {
    nameSearch: '',
  };

  handleSubmit = nameSearch => {
    this.setState({ nameSearch: nameSearch });
  };

  render() {
    const { nameSearch } = this.state;
    return (
      <ImageFinder>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery value={nameSearch}></ImageGallery>
        <Button></Button>
      </ImageFinder>
    );
  }
}

// export const App = () => {

//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     ></div>
//   );
// };
