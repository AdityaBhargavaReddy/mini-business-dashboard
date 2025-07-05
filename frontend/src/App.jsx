import { useState } from 'react'
import axios from 'axios'

export default function App() {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [businessData, setBusinessData] = useState(null)

  const fetchBusinessData = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/business-data', { name, location })
      setBusinessData(res.data)
    } catch (err) {
      console.error('Error fetching business data:', err)
    }
  }

  const regenerateHeadline = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/regenerate-headline?name=${name}&location=${location}`)
      setBusinessData(prev => ({ ...prev, headline: res.data.headline }))
    } catch (err) {
      console.error('Error regenerating headline:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Local Business Dashboard</h1>
        <form onSubmit={fetchBusinessData} className="space-y-4">
          <input
            type="text"
            placeholder="Business Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border border-gray-300 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {businessData && (
          <div className="mt-6 p-4 border-t">
            <p><strong>Google Rating:</strong> {businessData.rating}★</p>
            <p><strong>Reviews:</strong> {businessData.reviews}</p>
            <p><strong>SEO Headline:</strong> {businessData.headline}</p>
            <button
              onClick={regenerateHeadline}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Regenerate SEO Headline
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
