import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';

export class Searchbar extends Component {
  state = {
    nameSearch: '',
  };

  handleChange = e => {
    this.setState({ nameSearch: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.nameSearch.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.nameSearch);
    this.reset();
  };

  reset = () => {
    this.setState({
      nameSearch: '',
    });
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.nameSearch}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
