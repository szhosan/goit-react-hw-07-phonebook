import React from 'react';

const ContactSearch = () => {
  const onChange = e => {};
  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" /* value={} */ onChange={onChange} />
    </label>
  );
};

export default ContactSearch;
