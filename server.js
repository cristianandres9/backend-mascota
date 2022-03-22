'use strict'
const authRoutes = require('./auth/auth.routes');
const express = require('express');
const req = require('express/lib/request');
const propierties = require('./config/properties');
const DB = require('./config/db');
const { db } = require('./auth/auth.dao');
//iniciar DB
DB();

const app = express();
const router = express.Router();
app.use('/api', router);
authRoutes(router);

router.get('/', (req, res) => {
    res.send('Hello from home');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server Runini on port ${propierties.PORT}`));