import '../App.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <form className="contact-form" action="https://formspree.io/f/xkndyojw" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <input type="submit" value="Submit" style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        </form>
      </div>
    </div>
  );
}

export default Contact;