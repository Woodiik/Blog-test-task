import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactListThumb, Container } from './Contacts.styled';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';

export function Contacts() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>

      <Form />
      <ContactListThumb>
        <h2>Contacts</h2>
        <Filter />
        {contacts.items ?? <ContactList />}
      </ContactListThumb>
    </Container>
  );
}
