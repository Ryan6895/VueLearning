const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname,"./index.html"), "utf-8");
})();

app.get('*', (req,res) => {
  res.write(indexHTML);
  res.end();
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
