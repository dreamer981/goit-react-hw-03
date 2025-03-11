import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { nanoid } from "nanoid";

function App() {
  const getContactsFromLocalStorage = () => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]; // Eğer yerel depolamada kişi yoksa, varsayılan kişilerle başla
  };

  const [contacts, setContacts] = useState(getContactsFromLocalStorage());
  const [searchTerm, setSearchTerm] = useState(""); // Arama metni

  // Kişi silme fonksiyonu
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  // Kişi ekleme fonksiyonu
  const addContact = (newContact) => {
    const contactWithId = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, contactWithId]);
  };

  // Yerel depolamaya kaydetme işlemi
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // Arama işlemi
  const handleSearch = (searchQuery) => {
    setSearchTerm(searchQuery);
  };

  // Arama metnine göre filtreleme
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.number.includes(searchTerm)
  );

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
