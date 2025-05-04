const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
