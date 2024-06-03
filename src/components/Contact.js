import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oppj1wo', 'template_re4ulyb', form.current, 'Ev4pG9n6fluwvnObK')
      .then((result) => {
          console.log(result.text);
          alert("Sent")
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="max-w-90">
      <form ref={form} onSubmit={sendEmail} className="bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full p-2 text-white border border-white rounded-lg bg-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-2 text-white border border-white rounded-lg bg-black"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            className="w-full p-2 text-white border border-white rounded-lg bg-black"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded-lg border"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
