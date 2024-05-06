// index.js
const env = process.env.NODE_ENV || 'dev';
const config = require(`./config.${env}.json`);

console.log('Environment:', env);
console.log('Config:', config);
// index.js

