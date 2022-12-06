import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";
import { DocumentValidateFunc } from "./Validate.js";
import { PostFunc as FetchFuncsPostFunc } from "./FetchFuncs/ToServer/FromLocalStorage.js";

let SaveClickFunc = async (event) => {
    let jVarLocalFromValidate = await DocumentValidateFunc();

    if (jVarLocalFromValidate.KTF) {
        let jVarLocalTableBodyId = document.getElementById("TableBodyId");
        let jVarLocalInputFileName = document.getElementById("InPutFileName");

        let jVarLocalDocumentNo = document.getElementById("DocumentId").value;
        let jVarLocalDocumentDate = document.getElementById("DocumentDateId").value;
        let jVarLocalNatureDocument = document.getElementById("NatureDocumentId").value;
        let jVarLocalDiscriptionId = document.getElementById("DiscriptionId").value;

        let jVarLocalCopyXerox = document.getElementById("CopyXeroxId").value;
        let jVarLocalPageNo = document.getElementById("PageNoId").value;

        let saveData = {};

        saveData[jVarLocalTableBodyId.rows.length + 1] = {
            DocumentNo: jVarLocalDocumentNo,
            DocumentDate: jVarLocalDocumentDate,
            NatureDocument: jVarLocalNatureDocument,
            Discription:jVarLocalDiscriptionId,
            CopyXerox: jVarLocalCopyXerox,
            PageNo: jVarLocalPageNo
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