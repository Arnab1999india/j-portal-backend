const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Job Portal Backend');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
