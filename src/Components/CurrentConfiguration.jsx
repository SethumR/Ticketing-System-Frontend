export default function CurrentConfiguration({ config }) {
    return (
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Current Configuration</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span className="font-medium">Total number of tickets:</span>
            <span className={`px-3 py-1 rounded-full ${config.totalTickets === '0' ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'}`}>
              {config.totalTickets}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium">Ticket release rate:</span>
            <span className={`px-3 py-1 rounded-full ${config.releaseRate === '0' ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'}`}>
              {config.releaseRate} ms
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium">Customer retrieval rate:</span>
            <span className={`px-3 py-1 rounded-full ${config.retrievalRate === '0' ? 'bg-gray-100 text-gray-800' : 'bg-yellow-100 text-yellow-800'}`}>
              {config.retrievalRate} ms
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span className="font-medium">Maximum ticket capacity:</span>
            <span className={`px-3 py-1 rounded-full ${config.maxCapacity === '0' ? 'bg-gray-100 text-gray-800' : 'bg-purple-100 text-purple-800'}`}>
              {config.maxCapacity}
            </span>
          </li>
        </ul>
      </div>
    )
  }
  
  