import { useState } from 'react';
import ConfigurationPopup from './ConfigurationPopup';
import ConfigurationForm from './ConfigurationForm';
import CurrentConfiguration from './CurrentConfiguration';
import axios from 'axios';

export default function Home() {
  const [showConfigPopup, setShowConfigPopup] = useState(false);
  const [showConfigForm, setShowConfigForm] = useState(false);
  const [currentConfig, setCurrentConfig] = useState({
    totalTickets: '0',
    releaseRate: '0',
    retrievalRate: '0',
    maxCapacity: '0',
    numofVendors: '0',
    numofCustomers: '0',
  });

  const handleConfigClick = () => {
    setShowConfigPopup(true);
  };

  const handleCreateConfig = () => {
    setShowConfigPopup(false); // Close the popup
    setShowConfigForm(true); // Show the form
  };

  const handleConfigSubmit = (config) => {
    setCurrentConfig(config); // Update the current configuration
    setShowConfigForm(false); // Hide the form
    console.log('New configuration:', config);
  };

  const handleStart = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/config/start', currentConfig);
      console.log('Response from backend:', response.data);
    } catch (error) {
      console.error('Error sending configuration to backend:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 flex flex-col items-center justify-center p-8 text-black">
      <div className="w-full max-w-md mx-auto p-16 bg-slate-50 rounded-xl shadow-lg flex items-center justify-center hover:shadow-xl transition duration-300 ease-in-out mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Real-Time Simulation</h1>
      </div>

      <div className="w-full max-w-md p-4 bg-slate-50 rounded-xl shadow-lg space-y-4">
        <div className="flex space-x-4">
          <button
            onClick={handleStart}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Start
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
            Stop
          </button>
        </div>

        <button
          onClick={handleConfigClick}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Configuration
        </button>
      </div>

      <CurrentConfiguration config={currentConfig} />

      {/* Show the popup */}
      {showConfigPopup && (
        <ConfigurationPopup
          onClose={() => setShowConfigPopup(false)}
          onCreate={handleCreateConfig}
        />
      )}

      {/* Show the form */}
      {showConfigForm && (
        <ConfigurationForm
          onSubmit={handleConfigSubmit}
          onClose={() => setShowConfigForm(false)}
        />
      )}
    </div>
  );
}
