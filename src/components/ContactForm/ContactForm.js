import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ContactForm.module.css';
import MyButton from '../MyButton/MyButton';
import { getContactsSelector } from '../../redux/phoneBook/selectors';
import { addContact } from '../../redux/phoneBook/operations';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();

    if (this.props.contacts.some(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} already exists in contacts`);

      this.setState({
        error: true,
        name: '',
        number: '',
      });
    } else {
      const contact = {
        name: this.state.name,
        number: this.state.number,
      };
      this.props.onAddContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmitForm}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.label}>
          Phone number
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <MyButton
          style={styles.button}
          disable={name === '' || number === '' ? true : false}
          value="Add Contact"
          handleClick={() => {}}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { contacts: getContactsSelector(state) };
};

const mapDispatchToProps = {
  onAddContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
