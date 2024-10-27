'use client'
import React from 'react';
import { myapi } from '../../../lib/axios';

function MyForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Access form values directly using `event.target`
    const name = event.target.name.value;
    const email = event.target.email.value;

    console.log("Name:", name);
    console.log("Email:", email);

    // You can process or send the form data here
    try {
      // Make an Axios POST request to the registration endpoint
      const response = await myapi.post('/usersFake', {
        name,
        email,
      });
    } catch (error) {
      console.error("Error during registration:", error);
      // setError("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;



<div key={key}>
              <label className="block mb-2">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>