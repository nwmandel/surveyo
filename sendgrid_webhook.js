const localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'osaidjclkqmldksosi' }, function(err, tunnel) {
  console.log('localtunnel running');
  console.log('myerror', err);
});
