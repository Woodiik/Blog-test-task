import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })
      ) : visibleContacts.length === contacts.length ? (
        <h3>You have no contacts in your phonebook</h3>
      ) : (
        <h3>You have no contacts by your filter</h3>
      )}
    </List>
  );
};
