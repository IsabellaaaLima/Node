var http = require('http');
http.createServer(function (req, res){
     res.write('Brasil 2 x 1 Servia \n')
     res.end('Bom dia!');

}).listen(3000);