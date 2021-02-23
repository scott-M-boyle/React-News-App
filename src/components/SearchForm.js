import React from 'react';
import '../styles/SearchForm.css';

class SearchBar extends React.Component{
  state = {term: ""}

  formSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)

  }
  render() {
  return (
    <div className = "search-form-container">
    <form className = "search-form" onSubmit={this.formSubmit}
    onChange = {(e) => {this.setState({term: e.target.value})}}>
      <input className="search-field" ref="searchTerm" type="text"></input>
      <button className = "search-button" type="submit" onClick={this.formSubmit}>Submit </button>
    </form >
   </div>
 )
}
}

export default SearchBar;
