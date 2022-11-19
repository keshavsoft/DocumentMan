let CommonDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/PullData/FromDataFolder/FromFolderAndFile")
let CommonToDataFolderFromInput = require("../../../DataSupply/Fs/Config/Folders/Files/Items/Insert/ToDataFolder/FromInput");

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

module.exports = { InsertExtentsDetails };