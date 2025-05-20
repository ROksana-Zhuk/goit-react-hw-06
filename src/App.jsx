import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';
import css from './App.module.css'
import clsx from 'clsx';
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'


function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contacts");

    if (savedContact !== null) {
        return JSON.parse(savedContact);
    }

    return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
});


  const [filter, setFilter] = useState('');
  const [debouncedInputValue] = useDebounce(filter, 300);


  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);


  const visibleContact = useMemo(() => {
    return contacts.filter((contact) =>{
        console.log('filter', contact)
        return contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    }
    );
  }, [debouncedInputValue, contacts]);


  return (
    <div className={clsx(css.container)}>
      <h1 className={clsx(css.title)}
      >Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList />
    </div>
  )
}

export default App
