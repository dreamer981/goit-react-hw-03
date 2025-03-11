import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Required"),
  number: Yup.string()
  .matches(
    /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
    "Phone number must be in the format 555-22-33"
  )
  .required("Required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <div className={styles.contactForm}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          addContact(newContact);
          actions.resetForm();
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <label htmlFor="number">Number</label>
          <Field type="text" name="number" id="number" />
          <ErrorMessage name="number" component="div" className={styles.error} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;


