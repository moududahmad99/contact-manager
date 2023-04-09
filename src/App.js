import React from 'react'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const contacts = [
    {
        id: '1',
        "name": 'Moudud',
        "email": "moudud@gmail.com"
    },
    {
        id: '2',
        "name": 'Sabbir',
        "email": "sabbir@gmail.com"
    }
]

function App() {
    return (
        <React.Fragment>
            <div className='ui container'>
                <Header />
                <AddContact />
                <ContactList contacts={contacts} />
            </div>
        </React.Fragment>
    );
}

export default App;
