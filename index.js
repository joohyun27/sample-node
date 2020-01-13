// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
	    res.sendFile(path.join(__dirname + '/pages/index.html'));
});

const port = 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));

