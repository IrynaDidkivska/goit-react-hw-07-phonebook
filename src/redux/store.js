import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice/contactsSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },

  devTools: process.env.NODE_ENV !== 'production',
});
