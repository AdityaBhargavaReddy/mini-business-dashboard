const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const sampleHeadlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover {name}: The Hidden Gem of {location}!",
  "Top Reasons {name} is the Go-To Place in {location}",
  "{location} Loves {name}: Here's Why",
  "{name}: A Taste of {location}'s Finest"
]

function generateHeadline(name, location) {
  const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)]
  return template.replace('{name}', name).replace('{location}', location)
}

app.post('/business-data', (req, res) => {
  const { name, location } = req.body

  const data = {
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500) + 20,
    headline: generateHeadline(name, location)
  }

  res.json(data)
})

app.get('/regenerate-headline', (req, res) => {
  const { name, location } = req.query
  const headline = generateHeadline(name, location)
  res.json({ headline })
})

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`)
})
