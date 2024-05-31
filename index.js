const express = require('express');
const app = express();
const routes = require('./routes/routes');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000

// Template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', routes);


// Start the server
app.listen(port, () => console.log(`App listening on port ${port}`));

