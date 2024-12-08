import { useState } from 'react'
import { XIcon } from 'lucide-react'

export default function ConfigurationForm({ onSubmit, onClose }) {
  const [config, setConfig] = useState({
    totalTickets: '',
    releaseRate: '',
    retrievalRate: '',
    maxCapacity: '',
    numofVendors:'',
    numofCustomers:'',
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
      maxCapacity: '',
      numofVendors:'',
      numofCustomers:'',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(config) // Pass the current config to the parent onSubmit
    // Optionally, you can also call onClose here if you want to close the form after submission
    // onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl relative max-w-md w-full">
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-black" 
          onClick={onClose}
          aria-label="Close Configuration Form"
        >
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
                type="number"
                id="totalTickets"
                name="totalTickets"
                value={config.totalTickets}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="releaseRate" className="block text-sm font-medium text-gray-700 mb-1">
                Enter ticket release rate (in milliseconds):
              </label>
              <input
                type="number"
                id="releaseRate"
                name="releaseRate"
                value={config.releaseRate}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="retrievalRate" className="block text-sm font-medium text-gray-700 mb-1">
                Enter customer retrieval rate (in milliseconds):
              </label>
              <input
                type="number"
                id="retrievalRate"
                name="retrievalRate"
                value={config.retrievalRate}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                Enter maximum ticket capacity:
              </label>
              <input
                type="number"
                id="maxCapacity"
                name="maxCapacity"
                value={config.maxCapacity}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Number of Vendors:
              </label>
              <input
                type="number"
                id="numofVendors"
                name="numofVendors"
                value={config.numofVendors}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="maxCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Number of Customers:
              </label>
              <input
                type="number"
                id="numofCustomers"
                name="numofCustomers"
                value={config.numofCustomers}
                onChange={handleChange}
                required
                className="w-full border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
      
          </div>
          <div className="flex justify-end space-x-48 mt-6">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
