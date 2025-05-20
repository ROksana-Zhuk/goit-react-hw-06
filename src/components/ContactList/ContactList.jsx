import clsx from 'clsx';
import css from './ContactList.module.css'
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";


export default function ContactList() {

    const contacts = useSelector((state) => state.contacts.items);

    const filterText = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filterText.toLowerCase());
    });

    return (
        <ul className={clsx(css.list)}>
            {filteredContacts.map((contact) => (
                <li key={contact.id}
                    className={clsx(css.item)}
                >
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
      );
    }
