'use strict';

module.exports = {
  port: 4000,
  hostname: '127.0.0.1',
  baseUrl: 'http://localhost:3000',
  mongodb: {
    url: 'mongodb://localhost/auth'
  },
  app: {
    name: 'node-auth'
  },
  session: {
    secret: 'secret'
  }
};
