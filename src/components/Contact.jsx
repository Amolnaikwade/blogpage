import React from "react";

const Contact = () => (
  <section className="contact" id="contact">
    <h3>Contact Us</h3>
    <form>
      <input type="text" placeholder="Your name" />
      <input type="email" placeholder="Your email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

export default Contact;

