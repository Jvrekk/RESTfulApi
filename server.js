var express = require('express'),
    app = express();
    port = process.env.PORT || 4000,
    mongoose = require('mongoose'),
    Order = require('./api/models/apiModel'),
    bodyParser = require('body-parser');
    

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/spedicDB', {useNewUrlParser: true}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes');
routes(app);

app.listen(port);

console.log("Server started on port "+ port);