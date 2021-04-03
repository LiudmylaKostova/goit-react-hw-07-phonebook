import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const fetchContactRequest = createAction(
  'phonebook/fetchContactRequest',
);
export const fetchContactSuccess = createAction(
  'phonebook/fetchContactSuccess',
);
export const fetchContactError = createAction('phonebook/fetchContactError');

export const removeContactRequest = createAction(
  'phonebook/removeContactRequest',
);
export const removeContactSuccess = createAction(
  'phonebook/removeContactSuccess',
);
export const removeContactError = createAction('phonebook/removeContactError');

export const filterContacts = createAction('phonebook/filterContacts');
