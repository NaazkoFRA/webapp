const express = require('express');
const app = express();
var inutilisee = 'ceci est inutilisé';

function calcul(a, b) {
  if (a + b > 0) {
    return a + b;
  } else {
    return a + b;
  }
}

app.get('/', (req, res) => res.send('Hello DevSecOps!'));

module.exports = { app, calcul };
