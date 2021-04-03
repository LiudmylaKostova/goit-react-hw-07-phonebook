import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './actions';

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('http://localhost:4040/contacts', { name, number })
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(error => dispatch(addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get('http://localhost:4040/contacts')
    .then(({ data }) => {
      dispatch(fetchContactSuccess(data));
    })
    .catch(error => dispatch(fetchContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`http://localhost:4040/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, fetchContacts, removeContact };
