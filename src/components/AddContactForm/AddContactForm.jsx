import { useState } from 'react';
import s from './AddContactForm.module.css';
import { useCreateContactMutation } from 'redux/contacts/contactsSlice';

function AddContactForm({ contacts }) {
  const [contact, setContact] = useState({ name: '', number: '' });
  const [createContact, { isSuccess }] = useCreateContactMutation();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setContact(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const nameAlreadyExist = (contacts, nameToAdd) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === nameToAdd.toLowerCase()
    );
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const HandleSubmit = e => {
    e.preventDefault();
    if (nameAlreadyExist(contacts, contact.name)) {
      alert(`Name ${contact.name} is present in your phone book`);
      return;
    }
    createContact(contact).then(
      alert(`Name ${contact.name} successfully added to your phone book`)
    );

    reset();
  };

  return (
    <form className={s.form} onSubmit={HandleSubmit}>
      <div>
        <label className={s.form_label}>
          Name
          <br />
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
            required
            value={contact.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label className={s.form_label}>
          Number
          <br />
          <input
            className={s.input}
            type="tel"
            name="number"
            required
            value={contact.number}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default AddContactForm;
