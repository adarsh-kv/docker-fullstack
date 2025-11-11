const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/dockerlearn', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Sample route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Start the server
app.listen(5000, () => console.log("Backend running on port 5000"));
