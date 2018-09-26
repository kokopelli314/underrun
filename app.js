const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000
const STATIC_DIR = path.join(__dirname, 'build')
const MEDIA_DIR = path.join(__dirname, 'build/m')

// Serve static files and image media
app.use(express.static(STATIC_DIR))
app.use(express.static(MEDIA_DIR))

app.get('/', (req, res) => {
	res.sendFile(path.join(`${STATIC_DIR}`, 'underrun.html'))
})

// Start it up
app.listen(PORT, () => {
	console.log(`Express is listening on port ${PORT}!`)
})
