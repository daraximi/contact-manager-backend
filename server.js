const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');
//New server && Middleware
connectDb();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3001;
//Custom Middleware
app.use('/api/contacts', contactRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
