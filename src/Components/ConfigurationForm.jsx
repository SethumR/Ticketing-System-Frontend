import { useState } from 'react'
import { XIcon } from 'lucide-react'

export default function ConfigurationForm({ onSubmit, onClose }) {
  const [config, setConfig] = useState({
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (/^\d*$/.test(value)) { // Allow only positive numbers
      setConfig({ ...config, [name]: value })
    }
  }

  const handleClear = () => {
    setConfig({
      totalTickets: '',
      releaseRate: '',
      retrievalRate: '',
      maxCapacity: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(config) // Pass the current config to the parent onSubmit
    onClose() // Optional: Close the form if needed
  }

  return (
    <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl relative max-w-md w-full">
      <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
        <XIcon className="h-6 w-6" />
      </button>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Create Configuration</h2>
        <div className="space-y-6">
          <div>
            <label htmlFor="totalTickets" className="block text-sm font-medium text-gray-700 mb-1">
              Enter total number of tickets:
            </label>
            <input
              type="text"
              id="totalTickets"
              name="totalTickets"
              value={config.totalTickets}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="releaseRate" className="block text-sm font-medium text-gray-700 mb-1">
              Enter ticket release rate (in milliseconds):
            </label>
            <input
              type="text"
              id="releaseRate"
              name="releaseRate"
              value={config.releaseRate}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="retrievalRate" className="block text-sm font-medium text-gray-700 mb-1">
              Enter customer retrieval rate (in milliseconds):
            </label>
            <input
              type="text"
              id="retrievalRate"
              name="retrievalRate"
              value={config.retrievalRate}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">
              Enter maximum ticket capacity:
            </label>
            <input
              type="text"
              id="maxCapacity"
              name="maxCapacity"
              value={config.maxCapacity}
              onChange={handleChange}
              required
              className="w-full border-2 border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
            Clear
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
