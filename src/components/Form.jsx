import { collection, addDoc } from '@firebase/firestore';
import { db } from '../services/firebase';
import { useState } from 'react';

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
    <form onSubmit={onSubmit}>
      <label>
        First name: <input type="text" name="firstName" />
      </label>
      <label>
        Last name: <input type="text" name="lastName" />
      </label>
      <label>
        Email: <input type="email" name="email" />
      </label>
      <label>
        Anything to add or song wishes: <input type="text" name="comment" />
      </label>
      <Submit />
    </form>
  );
}

export default Form;
