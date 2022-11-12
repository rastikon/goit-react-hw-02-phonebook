import { Component } from 'react';
import Form from '../Form/Form';
import 'components/App/App.css';
import ContactsList from '../ContactList';
import Filter from 'components/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Додає контакт
  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  // Перевіряє унікальність контакту
  handleCheckUniqueContact = name => {
    const { contacts } = this.state;
    const isExistContact = !contacts.find(contact => contact.name === name); //Якщо однакові імена поверне true, якщо ні - false
    isExistContact && alert('Contact is already exist');
    return !isExistContact;
  };

  // Видаляє контакту
  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

  // Обробник для фільтрації контактів
  handleFilterChange = filter => this.setState({ filter });

  // Метод для фільтрації контактів
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="form">
        <h2>Phonebook</h2>
        <Form
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUniqueContact}
        />
        <h2>Contacts List</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactsList
          contacts={visibleContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}
