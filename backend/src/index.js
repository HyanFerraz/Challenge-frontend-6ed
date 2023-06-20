const express = require('express');
const ticket = require('./routes/ticket');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('./database');

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ticket);
const port = 3001;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
