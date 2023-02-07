// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONTROLLERS
const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

// LISTEN
app.listen(4005, () => {
    console.log('Server is running on port 4005');
})