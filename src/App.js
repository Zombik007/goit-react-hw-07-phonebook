import React from 'react';
import ContactForm from './Phonebook/ContactForm';
import FilterContact from './Phonebook/FilterContact';
import ContactList from './Phonebook/ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
}
