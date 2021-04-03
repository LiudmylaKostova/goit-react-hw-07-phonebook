import styles from '../ContactsList/ContactsList.module.css';
import MyButton from '../MyButton/MyButton';

const ContactItem = ({ name, number, id, handleDelete }) => {
  return (
    <li className={styles.li} key={id}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <MyButton
        style={styles.button}
        value={'Delete'}
        id={id}
        handleClick={handleDelete}
      />
    </li>
  );
};

export default ContactItem;
