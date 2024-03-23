import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const validations = [
  {
    id: 'firstName',
    msg: 'Please enter valid first name.',
    regex: /^[a-zA-Z]+( [a-zA-Z]+)?$/
  },
  {
    id: 'lastName',
    msg: 'Please enter valid last name.',
    regex: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/
  },
  {
    id: 'email',
    msg: 'Please enter valid email.',
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/
  },
  {
    id: 'password',
    msg: 'Must contain upper case, lower case, number, symbol.',
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{}|\\[\]:;"'<>,.?/]).{8,}$/
  },
];

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    favoriteSeason: 'spring',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    const isValid = validations.map(({ id, msg, regex }) => {
      if (!regex.test(formData[id])) {
        newErrors[id] = msg;
        return false;
      }
      return true;
    }).reduce((prev, current) => {
      return prev && current;
    }, true);

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/profile', { state: { formData } });
    }
  };

  return (
    <div className="App flex flex-col justify-center items-center h-screen bg-gray-100 p-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">CSCI 3172: Lab 7</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">
        {validations.map(({ id, msg }) => (
          <div key={id} className="flex flex-col">
            <label htmlFor={`${id}-input`} className="mb-2 font-semibold">{id.charAt(0).toUpperCase() + id.slice(1)}</label>
            <input
              type={id === 'password' ? 'password' : 'text'}
              id={id}
              value={formData[id]}
              onChange={handleChange}
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[id] && <div className="text-red-500">{errors[id]}</div>}
          </div>
        ))}
        <div className="flex flex-col">
          <label htmlFor="favorite-season-selector" className="mb-2 font-semibold">Favorite Season</label>
          <select
            name="favorite-season"
            id="favoriteSeason"
            onChange={handleChange}
            value={formData.favoriteSeason}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
