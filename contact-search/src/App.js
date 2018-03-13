import React, { Component } from 'react';
import './App.css';

import Contacts from './components/Contacts';
import SearchInput from './components/SearchInput';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filterSearch: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterSearch: value
    })
  }

  render() {
    console.log(this.state.filterSearch);
    return (
      <div className="App">
        <div className="App-header">
          <SearchInput 
          filterSearch={this.state.filterSearch} 
          filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>
        <div className="App-content">
          <Contacts 
          data={this.props.data} 
          filterSearch={this.state.filterSearch}
          />
        </div>
      </div>
    )
  }
}


export default App;