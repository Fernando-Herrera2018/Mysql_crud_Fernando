require('dotenv').config()
const app = require('./app')
const { PORT = 8181 } = process.env

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}/api/v1`)
})
  