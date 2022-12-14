let CommonPullData = require("../../../../PullData/FromConfigFolder/FromReturnDataJson");
let CommonPushData = require("../../../../PushData/ToConfigFolder/ToReturnDataJson/AsFoldFile");
//let CommonPushData = require("../../PushData/ToConfig");

let CommonFuns = {
    ToDisplay: async ({ inFolderName, inFileNameWithExtension, inToName, inDataPK }) => {
        let LocalReturnData = { KTF: false, LocalCreateItem: "" };

        let LocalFromPushDataFuncAsync;

        let LocalDataFromJSON = await CommonPullData.UsingFolderAndFileNameAsync({
            inFolderName, inFileNameWithExtension, inDataPK
        });

        if (LocalDataFromJSON.KTF === false) {
            LocalReturnData.KReason = LocalDataFromJSON.KReason;
            return await LocalReturnData;
        };

        let LocalDataFromJSONObject = JSON.parse(JSON.stringify(LocalDataFromJSON.JsonData));
        
        if (inToName in LocalDataFromJSONObject === false) {
            LocalDataFromJSONObject[inToName] = {};

            LocalFromPushDataFuncAsync = await CommonPushData.AsAsync({
                inFolderName,
                inJsonFileName: inFileNameWithExtension,
                inDataPK,
                inOriginalData: LocalDataFromJSON, inDataToUpdate: LocalDataFromJSONObject
            });
            
            if (LocalFromPushDataFuncAsync.KTF) {
                LocalReturnData.KTF = true;
            };
        };

        return await LocalReturnData;
    }
};

let Insert = async ({ inFolderName, inFileNameWithExtension, inToName, inDataPK }) => {
    let LocalReturnData = { KTF: false, KResult: [] };

    let LocalReturnDataFromDisplay = await CommonFuns.ToDisplay({
        inFolderName, inFileNameWithExtension,
        inToName,
        inDataPK
    });

    if (LocalReturnDataFromDisplay.KTF === false) {
        LocalReturnData.KReason = LocalReturnDataFromDisplay.KReason;

        return await LocalReturnData;
    };

    LocalReturnData.KTF = true;

    return await LocalReturnData;
};

module.exports = { Insert };