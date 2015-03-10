var request = require('request');

var options = {
  "url": "http://mockbin.com/har",
  "headers": {
    "Content-Type": "multipart/form-data"
  },
  "formData": {
    "foo": "hello world"
  }
};

request.post(options, function(error, response, body){
  if(error) throw new Error(error);

});

