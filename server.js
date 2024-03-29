const Bundler = require('parcel-bundler');
const app = require('express')();
require("dotenv").config();
const PORT = process.env.PORT || 5000;


const file = 'src/index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on port
app.listen(PORT);