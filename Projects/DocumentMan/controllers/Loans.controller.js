let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/PullData/FromDataFolder/FilesAsArray")


let getLoans = async (req, res) => {
    let LocalFromCommonFromDataSupply = await CommonDataSupply.StartFunc({
        inDataPK: 2051,
        inFolderName: "Loans"
    });

    if (LocalFromCommonFromDataSupply.KTF === false) {
        res.end(LocalFromCommonFromDataSupply.KReson)
    };

    res.json(LocalFromCommonFromDataSupply.KResult);


    // console.log("LocalFromCommonFromDataSupply---",LocalFromCommonFromDataSupply);

};

module.exports = { getLoans };