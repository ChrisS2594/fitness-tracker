const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require ("./routes/apiRoutes")(app);
require ("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONDOGDB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true
});

app.listen(PORT, function() {
    console.log('now listening on port: ${PORT}');
});