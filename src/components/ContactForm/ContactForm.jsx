import clsx from 'clsx';
import css from './ContactForm.module.css';
import { useDispatch } from "react-redux";


import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useId } from 'react';
import { addContact } from '../../redux/contactsSlice.js'


const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name too Short!')
      .max(50, 'Name too Long!')
      .required('Required'),

    number: Yup.string()
      .min(3, 'Number too Short!')
      .max(50, 'Number too Long!')
      .required('Required'),

  });

export default function ContactForm () {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {

        dispatch (addContact(
            {
                id: nanoid(),
                name: values.name,
                number: values.number
            }
        ));
		actions.resetForm();
	};


    const numberId = useId();
    const nameId = useId();


    return (
      <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema} >
        <Form className={clsx(css.form)}>
          <div className={clsx(css.box)}>
            <label htmlFor={nameId}
                   className={clsx(css.label)}

            >Name</label>
            <Field type="text"
                   name="name"
                   id={nameId}
                   className={clsx(css.input)}
                   />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={clsx(css.box)}>
            <label htmlFor={numberId}
                   className={clsx(css.label)}
            >Number</label>
            <Field type="tel"
                   name="number"
                   id={numberId}
                   className={clsx(css.input)}
                   />
            <ErrorMessage name="number" component="span" />
          </div>

          <button type="submit"
                  className={clsx(css.button)}
          >Add contact</button>
        </Form>
      </Formik>

    );
  };