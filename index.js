const express = require('express');
const serverless = require('serverless-http')

const app = express();
const router = express.Router()

router.get('/',(req,res) => {
  if(req.query.nimi != undefined) {
    res.send('Tere, ' + req.query.nimi + "!");
  } else {
    res.send('Tere, John Doe!')
  }
})

router.get('/test',(req,res) => {
  res.json({
      hello: "test!"
    });

})

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

//app.listen(3000, () => console.log('Example app is listening on port 3000!!'));