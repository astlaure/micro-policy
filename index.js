const path = require('path');
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'bin')));

app.get('/api/policy', (req, res) => {
    return res.json({
        policy: 'E12-1234',
        startDate: '01-01-2019',
        cost: 419.99
    })
});

app.listen(3002, () => {
    console.log('server started on port 3002.');
});