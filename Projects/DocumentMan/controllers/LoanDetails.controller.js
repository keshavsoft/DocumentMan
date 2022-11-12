//let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromConfigFolder/FromDisplayJson/AsJson")
let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/FromFolderAndFile")

let getLoansDetails = async (req, res) => {
    let jVarLocalInfileName = req.body.inFileName;

    let LocalFromCommonFromDataSupply = await CommonDataSupply.FullJsonData({
        inDataPK: 2051,
        inFolderName: "Loans",
        inFileNameWithExtension: jVarLocalInfileName
    });
    console.log("LocalFromCommonFromDataSupply-----", LocalFromCommonFromDataSupply);

    if (LocalFromCommonFromDataSupply.KTF === false) {
        res.end(LocalFromCommonFromDataSupply.KReson)
    };

    res.json(LocalFromCommonFromDataSupply.JsonData);
};

module.exports = { getLoansDetails };