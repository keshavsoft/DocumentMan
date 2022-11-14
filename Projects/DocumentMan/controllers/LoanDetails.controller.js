//let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromConfigFolder/FromDisplayJson/AsJson")
let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/FromFolderAndFile")

let getLoansDetails = async (req, res) => {
    let jVarLocalInfileName = req.body.inFileName;

    let LocalFromCommonFromDataSupply = await CommonDataSupply.FullJsonData({
        inDataPK: 2051,
        inFolderName: "Loans",
        inFileNameWithExtension: jVarLocalInfileName
    });
    console.log("LocalFromCommonFromDataSupply.KResult---",LocalFromCommonFromDataSupply);

    res.json(LocalFromCommonFromDataSupply.KResult);
};

module.exports = { getLoansDetails };