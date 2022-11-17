//let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/")

let getDocumentDetails = async (req, res) => {
    let jVarLocalInfileName = req.body.InFileName;
    console.log("hhhhhhhhhhhhhhhhh",jVarLocalInfileName);


    // let LocalFromCommonFromDataSupply = await CommonDataSupply.FullJsonData({
    //     inDataPK: 2051,
    //     inFolderName: "Loans",
    //     inFileNameWithExtension: jVarLocalInfileName
    // });
    // console.log("LocalFromCommonFromDataSupply.KResult---",LocalFromCommonFromDataSupply);

    // res.json(LocalFromCommonFromDataSupply.KResult);
};

module.exports = { getDocumentDetails };