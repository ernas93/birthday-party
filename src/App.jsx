import Form from './components/Form';
import image from './assets/party.jpeg';
import './App.scss';

function App() {
  return (
    <>
      <div className="hero">
        <img className="hero-image" src={image}></img>
        <h1 className="main-heading">Thirties Birthday Party</h1>
        <h1 className="main-heading">30</h1>
      </div>
      <main>
        <h2>Let's Party!</h2>
        <p>
          And the time has come, even for me to admit "defeat" and enter the
          thirties! So I want to celebrate joining the Thirties club, and I
          wanna celebrate it. I am hoping that every one of you personally can
          join me and celebrate with me! Celebrate life with me, drink the
          night, dance out the music, talk out the meanings to this all, catch
          up, and some of you even meet! Just celebrate!
        </p>
        <p>Enough of this lameness! LET'S PARTY! Here are the details</p>
        First put on whatever you feel fabulous in!
        <br />
        Second bring good vibes!
        <br />
        Third prepare your liver!
        <p>
          FYI We have the whole bar, and if you wanna bring a +1 please contact
          me first. Thank you!
        </p>
        <h3>DATE, TIME & PLACE</h3>
        <p>
          December 15th 2023
          <br />
          8pm or 20:00
          <br />
          Bar John Doe
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d38875.59147889741!2d13.454425168395687!3d52.48412435348305!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1707753880932!5m2!1sen!2sde"
          width="300"
          height="220"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <h2>Please RSVP</h2>
        <Form />
      </main>
    </>
  );
}

export default App;
