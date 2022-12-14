let CommonProjectName = "JSONImport";
let CommonProjectNameForJSONApi = "JSONApi";
let CommonProjectNameForJSONAdminApi = "JSONAdminApi";
let commonProjectNameForJSONUser = "JSONUser";
let commonProjectNameForDocumentMan = "DocumentMan";
let CommonProjectNameForJSONUtility = "JSONUtility";

const express = require('express');
var path = require('path');

const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');

var port = normalizePort(process.env.PORT || '4151');

//let SubRouteJSONReports = require(`./Projects/${CommonProjectName}/Routes`);
//let SubRouteJSONApi = require(`./Projects/${CommonProjectNameForJSONApi}/Routes`);
//let SubRouteJSONAdminApi = require(`./Projects/${CommonProjectNameForJSONAdminApi}/Routes`);
//let SubRouteJSONUser = require(`./Projects/${commonProjectNameForJSONUser}/Routes`);
let SubRouteDocumentMan = require(`./Projects/${commonProjectNameForDocumentMan}/Routes`);
// let SubRoutePage1 = require(`./Projects/${commonProjectNameForPage1}/Routes`);
let SubRouteJSONUtility = require(`./Projects/${CommonProjectNameForJSONUtility}/Routes`);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '100mb' }));

app.get('/', function (req, res, next) {
    res.status(301).redirect("./DocumentMan/Loans/Loans.html")
});

app.use(`/${commonProjectNameForDocumentMan}`, SubRouteDocumentMan);
// app.use(`/${commonProjectNameForPage1}`, SubRoutePage1);

//app.use("/JSONUser", SubRouteJSONUser);
//app.use("/JSONApi", cors({ origin: '*' }), SubRouteJSONProject);
//app.use(`/${CommonProjectName}`, SubRouteJSONReports);
//app.use(`/${CommonProjectNameForJSONApi}`, SubRouteJSONApi);
//app.use(`/${CommonProjectNameForJSONAdminApi}`, SubRouteJSONAdminApi);
//app.use(`/${commonProjectNameForJSONUser}`, SubRouteJSONUser);
app.use(`/${CommonProjectNameForJSONUtility}`, SubRouteJSONUtility);


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