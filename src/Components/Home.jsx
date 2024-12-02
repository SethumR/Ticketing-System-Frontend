'use client'

import { useState } from 'react'
import ConfigurationPopup from './ConfigurationPopup'
import ConfigurationForm from './ConfigurationForm'
import CurrentConfiguration from './CurrentConfiguration'

export default function Home() {
  const [showConfigPopup, setShowConfigPopup] = useState(false)
  const [showConfigForm, setShowConfigForm] = useState(false)
  const [currentConfig, setCurrentConfig] = useState({
    totalTickets: '0',
    releaseRate: '0',
    retrievalRate: '0',
    maxCapacity: '0'
  })

  const handleConfigClick = () => {
    setShowConfigPopup(true)
  }

  const handleCreateConfig = () => {
    setShowConfigPopup(false) // Close the popup
    setShowConfigForm(true)  // Show the form
  }

  const handleConfigSubmit = (config) => {
    setCurrentConfig(config)  // Update the current configuration
    setShowConfigForm(false)  // Hide the form
    console.log('New configuration:', config)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Ticket System</h1>
      <div className="space-y-4 w-full max-w-md">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300">
          Start
        </button>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
          Stop
        </button>
        <button 
          onClick={handleConfigClick} 
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Configuration
        </button>
      </div>

      <CurrentConfiguration config={currentConfig} />

      {/* Show the popup */}
      {showConfigPopup && (
        <ConfigurationPopup onClose={() => setShowConfigPopup(false)} onCreate={handleCreateConfig} />
      )}

      {/* Show the form */}
      {showConfigForm && (
        <ConfigurationForm onSubmit={handleConfigSubmit} />
      )}
    </div>
  )
}
