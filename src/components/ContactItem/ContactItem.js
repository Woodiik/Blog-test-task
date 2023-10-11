import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { DeleteButton, ListItem, Loader } from './ContactItem.styled';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';

export const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  return (
    <ListItem>
      {name}: {number}
      <DeleteButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        {isLoading && (
          <Loader
            color={`white`}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        Delete
      </DeleteButton>
    </ListItem>
  );
};
