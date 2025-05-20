import clsx from 'clsx';
import css from './Contact.module.css'


import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice.js'

export default function Contact( { data : { id, name, number } }) {

    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteContact(id))
    };


return (
    <div className={clsx(css.box)}>
      <div className={clsx(css.info)}>
        <div className={clsx(css.data)}>
          <IoPerson />
          <p type="text" name="name">{name}</p>
        </div>
        <div className={clsx(css.data)}>
          <BsFillTelephoneFill />
          <p type="number" name="number">{number}</p>
        </div>
      </div>
      <button type="click"
              className={clsx(css.button)}
              onClick ={() => onDelete(id)}>Delete</button>

    </div>
  );
};

