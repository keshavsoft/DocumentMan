//let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromConfigFolder/FromDisplayJson/AsJson")
let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/FromFolderAndFile")
let CommonToDataFolder = require("../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDataFolder/GenerateFileName");
let CommonToDataFolderFromInput = require("../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/ToDataFolder/FromInput");

let getDocumentDetails = async (req, res) => {
    let jVarLocalInfileName = req.body.inFileName;

    let LocalFromCommonFromDataSupply = await CommonDataSupply.FullJsonData({
        inDataPK: 2051,
        inFolderName: "Loans",
        inFileNameWithExtension: jVarLocalInfileName
    });
    console.log("LocalFromCommonFromDataSupply.KResult---", LocalFromCommonFromDataSupply);

    res.json(LocalFromCommonFromDataSupply.KResult);
};

let InsertDocumentDetails = async (req, res) => {
    console.log("sssssssss : ", req.params);
    let LocalBody = req.body;
    console.log("-InsertDocumentDetail------", LocalBody);

    await CommonToDataFolderFromInput.StartFunc({
        inFolderName: "Loans",
        inFileNameWithExtension: req.params.inLoanRef,
        inItemName: "DocumentsInfo",
        inDataPK: 2051,
        inData: LocalBody
    });
    res.json({});
};

module.exports = { getDocumentDetails, InsertDocumentDetails };