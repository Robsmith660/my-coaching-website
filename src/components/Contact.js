import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Clear form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="bg-red-700 text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white h-32 resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-red-700 py-2 px-6 rounded-full font-bold hover:bg-red-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
