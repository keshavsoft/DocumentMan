let CommonProjectNameForJSONUser = "JSONUser";
let commonProjectNameForDocumentMan = "DocumentMan";
let CommonProjectNameForJSONUtility = "JSONUtility";

const express = require('express');
var path = require('path');

const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var port = normalizePort(process.env.PORT || '4151');

let SubRouteDocumentMan = require(`./Projects/${commonProjectNameForDocumentMan}/Routes`);
let SubRouteJSONUtility = require(`./Projects/${CommonProjectNameForJSONUtility}/Routes`);
let SubRouteJSONUser = require(`./Projects/${CommonProjectNameForJSONUser}/Routes`);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    res.status(301).redirect("./DocumentMan/Loans/Loans.html")
});

app.use(`/${commonProjectNameForDocumentMan}`, SubRouteDocumentMan);
app.use(`/${CommonProjectNameForJSONUtility}`, SubRouteJSONUtility);
app.use(`/${CommonProjectNameForJSONUser}`, SubRouteJSONUser);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Listening in port : ${port}`);
    console.log(`Click to open : http://localhost:${port}`);
});