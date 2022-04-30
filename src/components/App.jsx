import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactSearch from './ContactSearch/ContactSearch';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('');
  const { data, isLoading } = useFetchContactsQuery();

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  return (
    <>
      <Section title="Phone Book">
        <AddContactForm contacts={data} />
      </Section>
      {isLoading && <>Is loading</>}
      {data && data.length > 0 && (
        <Section title="Contacts">
          <ContactSearch value={filter} onChange={handleFilterChange} />
          <ContactsList
            contacts={data.filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        </Section>
      )}
    </>
  );
}

export default App;
