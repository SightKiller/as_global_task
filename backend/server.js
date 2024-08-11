const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const connectDatabase = require('./database/database');
const routes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');

const port = 5000;
const app = express();

//middleware
app.use(bp.json());
app.use(cors());

//routes
app.use('/api',routes);
app.use('/api',itemRoutes);
// database
connectDatabase();

app.listen(port,()=>{
    console.log(`The server is listening to the port: http://localhost:${port}`);
})