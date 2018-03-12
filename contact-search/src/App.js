import React, { Component } from 'react';
import './App.css';

import Contacts from './components/Contacts';
import SearchInput from './components/SearchInput';

import contactsData from './resources/contact_data';

class App extends Component {

  state = {
    search: '',
    contacts: contactsData
  };

  updateSearch = updatedSearch => {
    let search = {...this.state.search}
    search = updatedSearch
    this.setState({search});
    let filteredContacts = contactsData.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
      }
    );
    this.setState({contacts: filteredContacts});
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchInput
            search={this.state.search} 
            updateSearch={this.updateSearch} 
          />
        </div>
        <div className="App-content">
          <Contacts 
            contacts={this.state.contacts}
          />
        </div>
      </div>
    );
  }
}

export default App;
