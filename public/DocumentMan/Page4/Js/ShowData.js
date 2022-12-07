import { FetchPost } from "./PullData.js";
import { ReturnLoanNumber } from "./urlSearchParams.js";

let jFShowToDOM = async () => {
    let jVarLocalLoanNumber = ReturnLoanNumber();
    let jVarLocalEnlistedId = document.getElementById("EnlistedDocumentsId");
    let jVarLocalPage4ExecuteId = document.getElementById("Page4ExecuteId");

    

    let jVarLocalName3Id = document.getElementsByClassName("Name3Class");
    let jVarLocalNameOfPACAClass = document.getElementsByClassName("VillaageIdClass");

    await FetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` });

    let jVarLocalData = localStorage.getItem("Document");
    let jVarLocalDataAsJson = JSON.parse(jVarLocalData);

    jVarLocalEnlistedId.innerHTML = jVarLocalDataAsJson.EnlistedDocuments;
    jVarLocalPage4ExecuteId.innerHTML = jVarLocalDataAsJson.Page4Execute;

    Array.from(jVarLocalName3Id).forEach(element => {
        element.innerHTML = jVarLocalDataAsJson.Name3;
    });
    
    Array.from(jVarLocalNameOfPACAClass).forEach(element => {
        element.innerHTML = jVarLocalDataAsJson.VillaageId;
    });
};

export {
    jFShowToDOM
};