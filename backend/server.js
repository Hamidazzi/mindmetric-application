require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('MindMetric API running'));
app.post('/api/echo', (req, res) => res.json({ received: req.body }));
app.listen(process.env.PORT || 3000, ()=> console.log('Server running'));