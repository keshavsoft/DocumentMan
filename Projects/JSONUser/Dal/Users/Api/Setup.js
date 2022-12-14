//let CommonUserFuncs = require("../../../../../DataSupply/Fs/Users/Admin/Setup");
//let CommonFromTemplate = require("../../../../../DataSupply/Fs/Users/Admin/Setup/FromTemplate");

let CommonFromTemplate = require("../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/FromTemplate");
let CommonBasic = require("../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/Basic");
let CommonForMsSql = require("../../../../../DataSupply/Fs/LoginFolder/Admin/Setup/ForMsSql");

let Basic = async ({ inUserPK }) => {
    return await CommonFromTemplate.StartFunc({ inUserPK });
};

let CreateFoldersOnly = async ({ inUserPK }) => {
    return await CommonBasic.StartFunc({ inUserPK });
};

let CreateForMsSql = async ({ inUserPK }) => {
    return await CommonForMsSql.StartFunc({ inUserPK });
};

module.exports = { Basic, CreateFoldersOnly, CreateForMsSql };