let fs = require("fs");
let path = require("path");
let CommonFileCheck = require("../../../Check/InReturnDataJson");

let RowsAsObjectsWithColumns = ({ inFolderName, inFileNameWithExtension, inItemName, inUserPK }) => {
    if (inUserPK > 0) {
        let LocalReturnData;
        let LocalFromFileCheck;
        let LocalDataFromJSON;
        let LocalFilePath;
        let LocalReturnObject = {};

        LocalFromFileCheck = CommonFileCheck.InConfig({
            inFolderName,
            inFileNameOnly: path.parse(inFileNameWithExtension).name,
            inUserPK
        });

        if (LocalFromFileCheck.KTF) {
            LocalFilePath = LocalFromFileCheck.ReturnDataPath;

            LocalDataFromJSON = fs.readFileSync(LocalFilePath);
            LocalReturnData = JSON.parse(LocalDataFromJSON);

            if (inItemName in LocalReturnData) {
                LocalReturnObject = PrepareScreenObject({ inData: LocalReturnData[inItemName] });
            };
        };

        return LocalReturnObject;
    };
};

let PrepareScreenObject = ({ inData }) => {
    let LocalLoopObject = {};
    let LocalReturnObject = {};

    Object.entries(inData).forEach(
        ([key, value]) => {
            LocalLoopObject = {};
            LocalLoopObject.ScreenName = key;
            LocalLoopObject.ScreenNameForHtmlId = key.replace(" ", "_");
           
            if ("Vertical" in value) {
                LocalLoopObject.TableColumnsObject = PrepareTableColumnObject({ inData: value.Vertical });
            };

            LocalReturnObject[key] = LocalLoopObject;
        }
    );

    return LocalReturnObject;
};

let PrepareTableColumnObject = ({ inData }) => {
    let LocalReturnObject = {};

    LocalReturnObject["Vertical"] = {
        DataAttribute: "Vertical",
        DataType: inData.Footer.Save.ReturnData.DataType,
        KTF: inData.Footer.Save.ReturnData.KTF,
    };

    return LocalReturnObject;
};

// console.log(RowsAsObjectsWithColumns({
//     inFolderName: "Masters",
//     inFileNameWithExtension: "Products.json", inItemName: "ProductNames", inUserPK: 1020
// }));

module.exports = {
    RowsAsObjectsWithColumns
};