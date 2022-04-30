import Section from './Section/Section';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactsList from './ContactsList/ContactsList';
import ContactSearch from './ContactSearch/ContactSearch';

function App() {
  const contactAmount = 1;
  return (
    <>
      <Section title="Phone Book">
        <AddContactForm />
      </Section>
      {contactAmount > 0 && (
        <Section title="Contacts">
          <ContactSearch />
          <ContactsList />
        </Section>
      )}
    </>
  );
}

export default App;
