import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";
import { DocumentValidateFunc } from "./Validate.js";
import { PostFunc as FetchFuncsPostFunc } from "./FetchFuncs/ToServer/FromLocalStorage.js";

let SaveClickFunc = async (event) => {
    let jVarLocalFromValidate = await DocumentValidateFunc();

    if (jVarLocalFromValidate.KTF) {
        let jVarLocalTableBodyId = document.getElementById("TableBodyForExtentsId");
        let jVarLocalInputFileName = document.getElementById("InPutFileName");

        let jVarLocalVillageNameId = document.getElementById("VillageNameId").value;
        let jVarLocalSurveyNoId = document.getElementById("SurveyNoId").value;
        let jVarLocalextentId = document.getElementById("extentId").value;
        let jVarLocalPartFullId = document.getElementById("PartFullId").value;

        let saveData = {};

        saveData[jVarLocalTableBodyId.rows.length + 1] = {
            VillageName: jVarLocalVillageNameId,
            SurveyNo: jVarLocalSurveyNoId,
            Extents : jVarLocalextentId,
            PF: jVarLocalPartFullId
        };

        let jVarLocalFromStorage = ToLocalStorageStartFunc({
            inDataToSave: saveData,
            inLoanRef: jVarLocalInputFileName.value
        });

        if (jVarLocalFromStorage) {
            let jVarLocalFromFetch = await FetchFuncsPostFunc();

            if (jVarLocalFromFetch.KTF) {
                window.location.reload();
            };
        };

        //ShowOnDomToTableBodyId({ inLoanRef: jVarLocalInputFileName.value });
    };
};

export { SaveClickFunc }