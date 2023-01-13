'use strict';
const crypto = require('crypto');

crypto.getHashes().forEach(hashe => {
  module.exports[hashe] =(stringToEncrypt) => {
      return  crypto.createHmac(hashe, 'FMJqH5GCgO').update(stringToEncrypt).digest('hex');
  }
})



