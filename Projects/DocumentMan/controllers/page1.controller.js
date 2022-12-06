let CommonToDataFolder = require("../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDataFolder/GenerateFileName");

let CreatePage = async (req, res) => {
    let LocalBody = req.body;
    console.log("--------------",LocalBody);

    await CommonToDataFolder.StartFunc({
        inFolderName: "Loans",
        inUserPK: 2051,
        inData: {
            "PageInfo": LocalBody
        }
    });
    res.json({});
};

let UpdateDocumentDetails = async (req, res) => {
    let LocalUpdateBody = req.body;
    console.log("LocalBody---",LocalUpdateBody);

    // let LocalFromDataSupply = await CommonToDataFolderFromInput.StartFunc({
    //     inFolderName: "Loans",
    //     inFileNameWithExtension: req.params.inLoanRef,
    //     inItemName: "DocumentsInfo",
    //     inDataPK: 2051,
    //     inData: LocalBody
    // });

    // res.json(LocalFromDataSupply);
};

module.exports = {
    CreatePage,UpdateDocumentDetails
};

