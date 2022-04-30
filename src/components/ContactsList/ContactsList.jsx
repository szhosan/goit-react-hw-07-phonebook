import React from 'react';
import s from './ContactsList.module.css';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
/* import PropTypes from 'prop-types'; */

const ContactsList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id}>
              <div className={s.listItemContainer}>
                <div className={s.nameContainer}>{name}:</div>
                <div className={s.numberContainer}>{number}</div>
                <button className={s.button} onClick={deleteContact(id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

/* ContactsList.propTypes = {
  contacts: PropTypes.array(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
}; */

export default ContactsList;
