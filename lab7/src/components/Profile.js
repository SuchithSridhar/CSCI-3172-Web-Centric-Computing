import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const moveToDashboard = () => {
    navigate('/dashboard', { state: { formData } });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile Page</h1>
      { formData ? (
        <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">
          <ul className="list-disc pl-5 space-y-2">
            {Object.entries(formData).map(([key, value]) => (
              key !== 'password' && <li key={key} className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}: <span className="font-normal">{value}</span></li>
            ))}
          </ul>
          <button onClick={moveToDashboard} className="block text-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Dashboard
          </button>
        </div>
      ) : (
        <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">
          <div>Form data is empty.</div>
          <button onClick={moveToDashboard} className="block text-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Dashboard
          </button>
        </div>
      )
      }
    </div>
  );
}

export default Profile;
