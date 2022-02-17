const express = require('express');
const rewrite = require('express-urlrewrite');

const app = express();
const PORT = 3000;

app.use(rewrite('/', '/pages/login'));

app.use(express.static('./dist'));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});