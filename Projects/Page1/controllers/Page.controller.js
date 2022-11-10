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

module.exports = {
    CreatePage
};

