import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

import styles from './Phonebook.module.css';

const ContactList = ({ contacts, onDeleteContact, fetchContacts }) => {
  console.log(fetchContacts);

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className={styles.phonebook__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.phonebook__item} key={id}>
            {name}: {number}
            <button
              className={styles.phonebook__button}
              onClick={() => {
                onDeleteContact(id);
              }}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
