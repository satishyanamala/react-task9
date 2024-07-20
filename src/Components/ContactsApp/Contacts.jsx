import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../ContactsApp/Contacts.css'
import ContactItem from '../ContactItem/ContactsItem';


const initialContactList = [
  {
    id: uuidv4(),
    name: 'Krishna',
    mobileNo: 99999999,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Arjun',
    mobileNo: 8787878787,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'John',
    mobileNo: 88888888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Massi',
    mobileNo: 666666666,
    isFavorite: true,
  },
];

const Contacts = () => {
  const [contactsList, setContactsList] = useState(initialContactList);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContact = () => {
    if (name === '' || number === '') {
      alert('Please enter name & number');
    } else {
      const newContact = {
        id: uuidv4(),
        name: name,
        mobileNo: number,
        isFavorite: false,
      };
      setContactsList([...contactsList, newContact]);
      alert('Contact added...');
      setName('');
      setNumber('');
    }
  };

  const toggleIsFavorite = (id) => {
    setContactsList((prevState) =>
      prevState.map((contact) =>
        contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
      )
    );
  };

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='col-12 text-center mb-5 mt-5'>Contacts</h1>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Enter Name'
            value={name}
            className='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Enter Number'
            value={number}
            className='form-control'
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className='col-md-4'>
          <button className='btn btn-primary w-100' onClick={addContact}>
            Add
          </button>
        </div>

        <table className='table mt-5'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {contactsList.map((contact) => (
              <ContactItem contact={contact} key={contact.id} toggleIsFavorite={toggleIsFavorite} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
