const express = require('express');

const app = express();

app.get('/', (req, res) => {
  if(req.query.nimi != undefined) {
    res.send('Tere, ' + req.query.nimi + "!");
  } else {
    res.send('Tere, John Doe!')
  }
});

app.listen(3000, () => console.log('Example app is listening on port 3000!'));