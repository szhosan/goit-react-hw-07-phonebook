import React from 'react';
import s from './ContactsList.module.css';
import { useFetchContacts } from 'redux/contacts/contactsSlice';

const ContactsList = () => {
  const { data } = useFetchContacts();
  console.log(data);
  const contacts = null;

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <div className={s.listItemContainer}>
              {name}: {number}
              <button
                className={s.button}
                /* onClick={() => } */
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
