/**
 * Created by yang on 2015/12/31.
 */
var http = require('http');
var code = require('../index.js');

http.createServer(function(req, res) {
    try {
        var t = code.generate();
        console.log('code:', t.code);

        res.setHeader('Content-Type', 'image/png');
        t.stream.pipe(res);
    } catch(err) {
        console.error(err);
        res.statusCode = 404;
        res.end(err.message);
    }
}).listen(1234);
