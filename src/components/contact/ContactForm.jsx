import React, { useState } from 'react';

const ContactForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State to store the success or error message
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;

    // Basic form validation
    if (!name || !email || !message) {
      setError('Please fill in all required fields.');
      return false;
    }

    // Email validation (simple regex)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    // Phone number validation (simple regex for numbers)
    const phonePattern = /^[0-9]{10}$/; // You can adjust the phone number pattern as needed
    if (phone && !phonePattern.test(phone)) {
      setError('Please enter a valid phone number (10 digits).');
      return false;
    }

    setError('');
    return true;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }

    const data = new FormData(event.target);
    data.append("access_key", "a875e6ee-5cef-4b9e-84cb-f860df6effe7");

    const object = Object.fromEntries(data);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        setMessage('Success! Your message has been sent.');

        // Clear form fields after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });

        // Hide the success message after 2 seconds
        setTimeout(() => {
          setMessage('');
        }, 2000);
      } else {
        setMessage('Error! There was a problem submitting the form.');
      }
    } catch (error) {
      setMessage('Error! Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      {/* Display success or error message */}
      {message && <div className="text-center text-sm text-green-600 p-4">{message}</div>}
      {error && <div className="text-center text-sm text-red-600 p-4">{error}</div>}

      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 cursor-text"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 cursor-text"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 cursor-text"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            placeholder="Enter your message"
            className="mt-1 block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 p-2 cursor-text"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
