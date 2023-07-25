import React, { useState } from 'react';
import './SimpleForm.css'

const SimpleFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data Submitted Successfully:\nName: ${formData.name}\nAge: ${formData.age}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className='form-field'>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div className='form-field'>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default SimpleFormComponent;
