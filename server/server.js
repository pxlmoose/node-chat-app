const path = require('path'); //built in node module, doesn't need to be installed with npm
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(publicPath));



app.listen(port, () => {
  console.log(`Started up on ${port}`);
});

module.exports = {app};


//
// console.log(__dirname + '/../public');
// console.log(publicPath);
