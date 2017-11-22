var opn = require('opn');
require('dns').lookup(require('os').hostname(), function (err, address, fam) {
    address = 'http://' + address + ':8080'
    console.log('addr: ' + address);
    console.log('type `npm run proxy` to start the reverse proxy server listening at `' + address + '`');
    opn(address);
})


// opens the url in the default browser