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
        joining: formJson.joining,
      });
      setHideForm(true);
    } catch (e) {
      console.error('Error adding document: ', e);
      // I've hidden the form, intentionally to replicate the funcionality, as I've disabled the database
      setHideForm(true);
    }
  };

  return hideForm ? (
    <p>Can't wait to see you there! Refresh to add another guest.</p>
  ) : (
    <form onSubmit={onSubmit} className="form">
      <input
        minLength={1}
        placeholder="First Name"
        type="text"
        name="firstName"
        required
      />
      <input
        minLength={1}
        placeholder="Last Name"
        type="text"
        name="lastName"
        required
      />
      <input
        minLength={1}
        placeholder="Email"
        type="email"
        name="email"
        required
      />
      <input
        placeholder="Anything to add or song wishes:"
        type="text"
        name="comment"
      />
      <div className="radio-buttons">
        <h4>Are you joining?</h4>
        <label>
          Yes <input type="radio" name="joining" value="yes" required />
        </label>
        <label>
          Most likely yes
          <input type="radio" name="joining" value="likely-yes" required />
        </label>
        <label>
          Most likely no
          <input type="radio" name="joining" value="likely-no" required />
        </label>
        <label>
          No <input type="radio" name="joining" value="no" required />
        </label>
      </div>
      <Submit />
    </form>
  );
}

export default Form;
