let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/PullData/FromDataFolder/FilesAsArray")


let getLoans = async (req, res) => {
    let LocalFromCommonFromDataSupply = await CommonDataSupply.StartFunc({
        inDataPK:2051, 
        inFolderName:"Loans"
    });
    res.json(LocalFromCommonFromDataSupply);
    // console.log("LocalFromCommonFromDataSupply---",LocalFromCommonFromDataSupply);

};

module.exports = { getLoans };