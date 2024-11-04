// server.js

const express = require('express');
const mongoose = require('mongoose');


const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/your_database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  details: String
});
const User = mongoose.model('User', userSchema);

// Routes
app.post('/users', async (req, res) => {
  try {
    const { username, email, details } = req.body;
    const newUser = new User({ username, email, details });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
