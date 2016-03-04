/**
 * Created by yang on 2015/12/30.
 */
var fs = require('fs');
var code = require('../index.js');

var t = code.generate();

console.log(t.code);

t.stream.pipe(fs.createWriteStream('/root/demo.png'));

console.log('/root/demo.png');