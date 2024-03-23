import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const moveToProfile = () => {
    navigate('/profile', { state: { formData } });
  };

  const moveToLogin = () => {
    navigate('/', { state: { formData } });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 p-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        <div className="w-full max-w-lg p-8 space-y-4 bg-white rounded-lg shadow-md">

          <button onClick={moveToLogin} className="block text-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Login Page
          </button>
          <button onClick={moveToProfile} className="block text-center w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Profile
          </button>
        </div>
    </div>
  );
}

export default Dashboard;
