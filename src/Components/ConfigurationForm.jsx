import { useState } from 'react'

export default function ConfigurationForm({ onSubmit }) {
  const [config, setConfig] = useState({
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: ''
  })

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(config)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Configuration</h2>
      <div className="space-y-6">
        <div>
          <label htmlFor="totalTickets" className="block text-sm font-medium text-gray-700 mb-1">Enter total number of tickets:</label>
          <input
            type="number"
            id="totalTickets"
            name="totalTickets"
            value={config.totalTickets}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="releaseRate" className="block text-sm font-medium text-gray-700 mb-1">Enter ticket release rate (in milliseconds):</label>
          <input
            type="number"
            id="releaseRate"
            name="releaseRate"
            value={config.releaseRate}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="retrievalRate" className="block text-sm font-medium text-gray-700 mb-1">Enter customer retrieval rate (in milliseconds):</label>
          <input
            type="number"
            id="retrievalRate"
            name="retrievalRate"
            value={config.retrievalRate}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">Enter maximum ticket capacity:</label>
          <input
            type="number"
            id="maxCapacity"
            name="maxCapacity"
            value={config.maxCapacity}
            onChange={handleChange}
            required
            className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <button type="submit" className="w-full mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Submit
      </button>
    </form>
  )
}

