import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './ContactsList.module.css';
import { getFilteredContacts } from '../../redux/phoneBook/selectors';
import { removeContact } from '../../redux/phoneBook/operations';
import ContactItem from '../ContactItem/ContactItem';

const ContactsList = () => {
  const filteredContacts = useSelector(state => getFilteredContacts(state));

  const dispatch = useDispatch();

  return (
    <ul className={styles.ul}>
      {filteredContacts.map(contact => (
        <ContactItem
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={id => dispatch(removeContact(id))}
        />
      ))}
    </ul>
  );
};

export default ContactsList;
