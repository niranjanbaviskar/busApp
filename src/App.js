import React, { useState } from 'react';
import './styles/App.css';
import PassDetails from './components/PassDetails';

function App() {
  const [formData, setFormData] = useState({
    passType: '',
    id: '',
    fare: '',
    bookingTime: '',
    validityTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="app">
      {!submitted ? (
        <div className="form-container">
          <h1>Enter Pass Details</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="passType"
              placeholder="Pass Type"
              value={formData.passType}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="fare"
              placeholder="Fare"
              value={formData.fare}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="bookingTime"
              placeholder="Booking Time (YYYY-MM-DD HH:MM)"
              value={formData.bookingTime}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="validityTime"
              placeholder="Validity Time (YYYY-MM-DD HH:MM)"
              value={formData.validityTime}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <PassDetails data={formData} />
      )}
    </div>
  );
}

export default App;
