import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title, Subtitle } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const pushDataToArr = contact => {
    setContacts(prevState => [contact, ...prevState]);
  };

  const formSubmitHandler = data => {
    console.log(data);
    const normalizedName = data.name.toLowerCase();

    const isTheSame = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isTheSame) {
      alert(`${isTheSame.name} is already in contacts`);
      return;
    }

    data.id = nanoid();
    pushDataToArr(data);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = toDeleteId => {
    console.log('sdf');
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== toDeleteId)
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={formSubmitHandler} />

      <Subtitle>Contacts</Subtitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}