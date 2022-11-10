let CommonFromDataSupply = require("../../../DataSupply/Fs/Config/Folders/Files/Items/PullData/FromDataFolder/PullFuncs/AsObject");
let CommonToDataFolder = require("../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDataFolder/GenerateFileName");

let getDocuments = async (req, res) => {
    let LocalFromCommonFromDataSupply = await CommonFromDataSupply.FromFolderAndFileAsObject({
        inFolderName: "05-11-2022 07,52,24",
        inFileNameWithExtension: "Masters.json",
        inItemName: "stockgroups",
        inDataPK: 2016
    });
    console.log("LocalFromCommonFromDataSupply : ", LocalFromCommonFromDataSupply);
    res.json(LocalFromCommonFromDataSupply);
};

let CreateDocument = async (req, res) => {
    let LocalBody = req.body;

    await CommonToDataFolder.StartFunc({
        inFolderName: "Loans",
        inUserPK: 2051,
        inData: {
            "DocumentsInfo": LocalBody
        }
    });

    // let LocalFromCommonFromDataSupply = await CommonFromDataSupply.FromFolderAndFileAsObject({
    //     inFolderName: "05-11-2022 07,52,24",
    //     inFileNameWithExtension: "Masters.json",
    //     inItemName: "stockgroups",
    //     inDataPK: 2016
    // });

    //  console.log("LocalBody : ", LocalBody);
    res.json({});
};

module.exports = {
    getDocuments,
    CreateDocument
};

