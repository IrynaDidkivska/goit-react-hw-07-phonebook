import React, { useEffect } from 'react';
import { Title, Wrapper } from './App.styled';
import { ContactList } from 'components/ContactsList/ContactList';
import { ContactForm } from 'components/ContactsForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operators';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loading ? <Loader /> : <ContactList />}
    </Wrapper>
  );
};
