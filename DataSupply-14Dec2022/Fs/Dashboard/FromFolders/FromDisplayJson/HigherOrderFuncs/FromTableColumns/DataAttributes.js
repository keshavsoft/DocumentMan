let path = require("path");
//let CommonFolders = require("../../../../../Folders/Show");
//let CommonFiles = require("../../../../../Files/PullData");
let CommonNewItems = require("../../../../../Config/Folders/Files/Items/PullData/FromDisplayJson/HigherOrderFuncs/FromTableColumns");
let CommonFolders = require("../../../../../Config/Folders/PullData/getDirectories");
let CommonFiles = require("../../../../../Config/Folders/Files/PullData/ListFiles");

class FuncsWithColumns {
    static AsTreeWithColumns = async ({ inUserPK }) => {
        let LocalFoldersData = CommonFolders.StartFunc({ inUserPK });
        let LocalFolderObject;
        let LocalReturnObject = {
            Folders: {}
        };

        LocalFoldersData.forEach(LoopFolderName => {
            LocalReturnObject.Folders[LoopFolderName] = {
                FolderName: LoopFolderName,
                Files: this.PullFiles({
                    inFilesArray: CommonFiles.StartFunc({ inFolderName: LoopFolderName, inUserPK }),
                    inFolderName: LoopFolderName,
                    inUserPK
                })
            };

            return LocalFolderObject;
        });

        return LocalReturnObject;
    };

    static PullFiles = ({ inFolderName, inFilesArray, inUserPK }) => {
        let LocalReturnObject = {};

        inFilesArray.forEach(LoopFileName => {
            LocalReturnObject[path.parse(LoopFileName).name] = {
                FileName: LoopFileName,
                Items: CommonNewItems.StartFunc({
                    inFolderName,
                    inFileNameWithExtension: LoopFileName,
                    inUserPK,
                    inFuncToRun: this.HigherOrderFuncToRun
                })
            };
        });

        return LocalReturnObject;
    };

    static HigherOrderFuncToRun = ({ inData }) => {
        let LocalReturnObject = {};

        inData.forEach(LoopItem => {
            LocalReturnObject[LoopItem.DataAttribute] = {
                DataAttribute: LoopItem.DataAttribute,
                DisplayName: LoopItem.DisplayName,
            };
        });
        return LocalReturnObject;
    };
};

module.exports = { AsTreeWithColumns: FuncsWithColumns.AsTreeWithColumns };