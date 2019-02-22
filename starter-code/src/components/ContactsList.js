import React, { Component } from 'react';
import ContactItem from './ContactItem'

export default class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allContacts: props.contacts,
      contacts: [...props.contacts].slice(0, 5),
      sortParam: 'name'
    }
  }

  addContact = () => {
    const randomContact = this.state.allContacts[Math.floor(Math.random() * this.state.allContacts.length)];

    this.setState({ contacts: [randomContact, ...this.state.contacts] });
  }

  sortBy = (sortParam) => {
    this.setState({ sortParam });
  }

  deleteContact = (indexToDelete) => {
    this.setState({
      contacts: this.state.contacts.filter((_, i) => indexToDelete !== i)
    })
  }

  render() {
    const sortedContacts = [...this.state.contacts].sort((a, b) => (
      b[this.state.sortParam] - a[this.state.sortParam]
    ))

    const contactItems = sortedContacts.map((contact, i) => (
      <ContactItem contact={contact} key={i} index={i} onDelete={this.deleteContact}/>
    ));

    return (
      <div className="ContactsList">
        <button onClick={this.addContact}>Add Contact</button>
        <button onClick={() => this.sortBy('name')}>Sort by name</button>
        <button onClick={() => this.sortBy('popularity')}>Sort by popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>

          <tbody>
            {contactItems}
          </tbody>
        </table>
      </div>
    );
  } 
}