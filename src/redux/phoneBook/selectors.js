import { createSelector } from '@reduxjs/toolkit';

const getContactsSelector = state => state.contacts.items;
const getFilterSelector = state => state.contacts.filter;
const isLoadingSelector = state => state.contacts.loading;

const getFilteredContacts = createSelector(
  [getContactsSelector, getFilterSelector],
  (contacts, filter) => {
    return filter
      ? contacts.filter(contact =>
          contact.name
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : null,
        )
      : contacts;
  },
);

export {
  getContactsSelector,
  getFilterSelector,
  isLoadingSelector,
  getFilteredContacts,
};
