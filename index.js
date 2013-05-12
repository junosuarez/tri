global.lug = require('lug')
var memwatch = require('memwatch')
memwatch.on('stats', lug.label('memwatch'))

Object.prototype.lug = lug