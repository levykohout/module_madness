// The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:
//
// The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.
// app.js
// Finally, in the app.js file use the functions from your third module to produce the following output in the console:
//
// Account balance:
// $156,301
var http = require('http');
var amount = require('./third_module')

http.createServer (function(req, res){
res.writeHead(200);
res.write(amount.display());
res.write(amount.getNumber());
res.end();

}).listen(3000);
