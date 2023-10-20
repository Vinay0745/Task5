import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');

  const calculateAge = () => {
    const inputDate = new Date(birthdate);
    if (isNaN(inputDate)) {
      setError('Invalid date format. Please use yyyy-mm-dd.');
      setAge('');
      return;
    }

    const today = new Date();
    if (inputDate > today) {
      setError("Birthdate can't be in the future.");
      setAge('');
      return;
    }

    const ageInMilliseconds = today - inputDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(ageInYears.toFixed(2));
    setError('');
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>Enter your birthdate:</label>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {error && <p className="error">{error}</p>}
      {age && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;