import { collection, addDoc } from '@firebase/firestore';
import { db } from '../services/firebase';
import { useState } from 'react';
import './Form.scss';

function Submit() {
  return (
    <button type="submit" disabled={false}>
      Submit
    </button>
  );
}

function Form() {
  const [hideForm, setHideForm] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, 'Guests'), {
        firstName: formJson.firstName,
        lastName: formJson.lastName,
        email: formJson.email,
        comment: formJson.comment,
      });
      setHideForm(true);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return hideForm ? (
    <p>thanks</p>
  ) : (
    <form onSubmit={onSubmit} className="form">
      <input placeholder="First Name" type="text" name="firstName" />
      <input placeholder="Last Name" type="text" name="lastName" />
      <input placeholder="Email" type="email" name="email" />
      <input
        placeholder="Anything to add or song wishes:"
        type="text"
        name="comment"
      />

      <Submit />
    </form>
  );
}

export default Form;
