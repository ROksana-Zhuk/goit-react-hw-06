import css from './App.module.css'
import clsx from 'clsx';
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'


function App() {

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
