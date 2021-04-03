import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import phonebookReducer from './phoneBook/reducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
