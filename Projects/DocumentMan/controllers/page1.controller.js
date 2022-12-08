let CommonToDataFolder = require("../../../DataSupply/Fs/Config/Folders/Files/Insert/ToDataFolder/GenerateFileName");
let CommonToDataFolderToUpdate = require("../../../DataSupply/CommonTableFuncs/MainTable/UpdateFuncs/DataOnly");


let CreatePage = async (req, res) => {
    let LocalBody = req.body;
    console.log("--------------", LocalBody);

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
    let LocalinLoanNumber = req.params.inLoanNumber;
    let LocalUpdateBody = req.body;
    console.log("inFileNameWithExtension",`${LocalinLoanNumber}.json`);

    let inJsonConfig = { inFolderName: "Loans", inJsonFileName: `${LocalinLoanNumber}.json` };
    let inItemConfig = { inItemName: "PageInfo" }

    let LocalFromDataSupply = await CommonToDataFolderToUpdate.WithOutScreen({
        inJsonConfig, inItemConfig,
        inUserPK: 2051,
        inPostData: LocalUpdateBody,
        inRowPK:"BranchId"
    });

    res.json(LocalFromDataSupply);
};

module.exports = {
    CreatePage, UpdateDocumentDetails
};

