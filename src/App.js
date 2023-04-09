import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import { v4 as uuid } from 'uuid'

function App() {

    const LOCAL_STORAGE_KEY = 'contacts'
    const [contacts, setContacts] = useState([])

    const addContactHandler = contact => {
        setContacts([...contacts, { id: uuid(), ...contact }])
    }


    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => {
            return contact.id !== id;
        });

        setContacts(newContactList);
    };

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (retriveContacts) setContacts(retriveContacts)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }, [contacts])

    return (
        <React.Fragment>
            <div className='ui container'>
                <Header />
                <AddContact addContactHandler={addContactHandler} />
                <ContactList contacts={contacts} getContactId={removeContactHandler} />
            </div>
        </React.Fragment>
    );
}

export default App;
