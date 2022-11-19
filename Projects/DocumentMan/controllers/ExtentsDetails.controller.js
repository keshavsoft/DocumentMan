let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/FromFolderAndFile")
let CommonToDataFolderFromInput = require("../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/ToDataFolder/FromInput");

let getExtentsDetails = async (req, res) => {
    let jVarLocalInfileName = req.params.inLoanRef;

    let LocalFromCommonFromDataSupply = await CommonDataSupply.FullJsonData({
        inDataPK: 2051,
        inFolderName: "Loans",
        inFileNameWithExtension: `${jVarLocalInfileName}.json`
    });

    res.json(LocalFromCommonFromDataSupply.KResult);
};

let InsertExtentsDetails = async (req, res) => {
    let LocalBody = req.body;

    let LocalFromDataSupply = await CommonToDataFolderFromInput.StartFunc({
        inFolderName: "Loans",
        inFileNameWithExtension: req.params.inLoanRef,
        inItemName: "ExtentsInfo",
        inDataPK: 2051,
        inData: LocalBody
    });

    res.json(LocalFromDataSupply);
};

module.exports = { InsertExtentsDetails, getExtentsDetails };