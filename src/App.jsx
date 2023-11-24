import Form from './components/Form';
import image from './assets/party.jpeg';
import './App.scss';

function App() {
  return (
    <>
      <div className="hero">
        <img className="hero-image" src={image}></img>
        <h1 className="main-heading">Dirty Thirties Birthday Party</h1>
        <h1 className="main-heading">30</h1>
      </div>
      <main>
        <h2>Let's Party!</h2>
        <p>
          And the time has come, even for me to admit "defeat" and enter the
          thirties! So I want to celebrate joining the Thirties club, and I
          wanna celebrate it hard and dirty. I am hoping that every one of you
          personally can join me and celebrate with me! Celebrate life with me,
          drink the night, dance out the music, talk out the meanings to this
          all, catch up, and some of you even meet! Just celebrate!
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
          Bar Marabu
          <br />
          Oppelner Str. 23
          <br />
          10997 Berlin
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77700.80758076621!2d13.325355184115862!3d52.5126201408221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e4d1b3d3071%3A0xce49bd7e20bc9095!2sMarabu!5e0!3m2!1sen!2sde!4v1700845394727!5m2!1sen!2sde"
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
