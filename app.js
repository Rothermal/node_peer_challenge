/**
 * Created by Scott on 1/5/16.
 */
var http = require('http');
var accountBalance = require('./accountBalance');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(accountBalance.balance());
    response.write(accountBalance.dollar());
    response.end();
}).listen(3000);

console.log('Listening on port 3000');