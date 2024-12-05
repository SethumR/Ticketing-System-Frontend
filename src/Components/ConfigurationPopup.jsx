import { XIcon } from 'lucide-react'
import ConfigurationForm from './ConfigurationForm'
import { useState } from 'react'

export default function ConfigurationPopup({ onClose }) {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleCreate = () => {
    setIsFormVisible(true)
  }

  const handleFormClose = () => {
    setIsFormVisible(false)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl relative max-w-md w-full">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
          <XIcon className="h-6 w-6" />
        </button>
        <h2 className="text-xl font-bold mb-4">Configuration Options</h2>
        <p>Would you like to configure your system?</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Create Configuration
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400">
            Load
          </button>
        </div>
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
          <ConfigurationForm onClose={handleFormClose} />
        </div>
      )}
    </div>
  )
}
