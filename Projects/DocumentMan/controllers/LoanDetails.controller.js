let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromConfigFolder/FromDisplayJson/AsJson")


let getLoansDetails = async (req, res) => {
    let jVarLocalInfileName = req.body.inFileName;

    let LocalFromCommonFromDataSupply = await CommonDataSupply.FromFoldFile({
        inDataPK: 2051,
        inFolderName: "Loans",
        inFileName: jVarLocalInfileName
    });
    console.log("LocalFromCommonFromDataSupply-----",LocalFromCommonFromDataSupply);

    if (LocalFromCommonFromDataSupply.KTF === false) {
        res.end(LocalFromCommonFromDataSupply.KReson)
    };

    res.json(LocalFromCommonFromDataSupply.KResult);


    // console.log("LocalFromCommonFromDataSupply---",LocalFromCommonFromDataSupply);

};

module.exports = { getLoansDetails };