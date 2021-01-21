let express = require('express');
let app = express();
app.use(express.static('dist/MarveCharacterApplication'));
app.get('/', function (req, res,next) {
    res.redirect('/');
});
app.listen(8080)