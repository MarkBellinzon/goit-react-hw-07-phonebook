// import { useSelector } from 'react-redux';
import css from './App.module.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { ToastContainer } from 'react-toastify';


export const App = () => {
  // const users = useSelector(state => state.contacts.items);

  return (
    <div className={css.form}>
      <h1 className={css.title}>Phonebook</h1>
      <Section>
        <ContactForm />
      </Section>

      <Section>
    

          <h2 className={css.title}>Contacts</h2>
        <Filter />
        <div className={css.scrollbar}>
          <ContactList />
        </div>
      </Section>
      <ToastContainer />
    </div>
  );
};
