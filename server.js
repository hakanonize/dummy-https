const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static("public"));


app.get('/', function(req,res) {
  res.render('index')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
})