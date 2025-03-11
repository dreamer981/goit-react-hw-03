import React from "react";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contactItem}>
          <div className={styles.contactDetails}>
            <span className={styles.contactName}>
              <i className="fas fa-user"></i> {contact.name}
            </span>

            <span className={styles.contactNumber}>
              <i className="fas fa-phone-alt"></i> {contact.number}
            </span>
          </div>
          <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

