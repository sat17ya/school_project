import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          setSuccess(true);
          setSending(false);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
          setSending(false);
        }
      );
  };

  return (
    <section className="p-5 bg-light">
      <div className="container">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="mt-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Number</label>
            <input type="text" name="user_phone" className="form-control" placeholder="Your Number" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>

          {success === true && (
            <div className="alert alert-success mt-3">Message sent successfully!</div>
          )}
          {success === false && (
            <div className="alert alert-danger mt-3">Failed to send message. Try again later.</div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
