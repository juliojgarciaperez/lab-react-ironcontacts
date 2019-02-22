import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts';
import ContactsList from './components/ContactsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <ContactsList contacts={contacts}/>
      </div>
    );
  }
}

export default App;
