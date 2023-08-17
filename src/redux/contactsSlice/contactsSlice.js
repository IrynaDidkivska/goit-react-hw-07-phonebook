import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchContacts } from 'redux/operators';

const initialState = {
  contacts: [],
  filterValue: '',
};

export const listSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filterValue = action.payload; // Оновлення значення фільтра на основі переданої дії
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(addNewContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      });
  },
});
// Екпортуємо наші екшени, щоб вони працювали в компонентах при dispatch
export const { filterContact } = listSlice.actions;
// Eкспортуємо редьюсер для того, щоб додати його в configureStore, котрий в store.js
export const contactReducer = listSlice.reducer;
