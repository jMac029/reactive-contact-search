import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component {
  handleSearch() {
    const val = this.myValue.value;
    console.log(val);
    this.props.filterUpdate(val);
  };

  componentDidMount(){
    this.myValue.focus()
  };

  render(){
    return (
      <form>
        <input 
        className="search" 
        name="search" 
        type="text" 
        ref={(value) => {this.myValue = value}} 
        placeholder="Search" 
        value={this.props.search}  
        aria-label="Search" 
        onChange={this.handleSearch.bind(this)} 
        />
      </form>
    );
  }
}

export default SearchInput;
