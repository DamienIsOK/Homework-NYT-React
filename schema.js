// Require Mongoose
var mongoose = require('mongoose');
// Connect to the ongo db
var db = mongoose.connection;
// try and connect to your test db
mongoose.connect('mongodb://localhost/test');
// save the mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema;
// If there is an error, the log it
db.on('error', console.error);
// Once the connection is open, then run the following schema
db.once('open', function() {
  // with our new Schema class, we create an Article object.
  // This is where we decide how our data must look before we accept it in the server
  // and how to format it in mongoDB
  var mySchema = new Schema({
    // string must be a string. We "trim" it to remove any trailing white space.
    // Notice that it is required, as well. It must be entered 
    // or else mongoose will throw an error.
    title: {
      type: String,
      required: true
    },
    // the Date must be a date. The default is the current date
    date: {
      type: Date,
      default: Date.now
    },
    url: {
      type: String,
      required: true
    }
  });
});

// This creates our model from the above schema, using mongoose's model method.
var myModel = mongoose.model('nytarticle', Article);

// finally, we export the module, allowing server.js to hook into it with a require statement.
module.exports = myModel;
