import {jFClickDateId   } from "./ClickFuncs";
import {  } from ".";

let StartFunc = () => {
    let jVarLocalsaveClick = document.getElementById("PageSave");

    jVarLocalsaveClick.addEventListener("click", SaveClickFunc);

    // document.addEventListener("DOMContentLoaded", FromHbs);
};

let jFAddListeners = () => {
    let jVarLocalBranchId = document.getElementById("BranchId");
    jVarLocalBranchId.addEventListener("click", jFClickBranchId);

    let jVarLocalNameId = document.getElementById("NameId");
    jVarLocalNameId.addEventListener("click", jFClickNameId);

    let jVarLocalNumberId = document.getElementById("NumberId");
    jVarLocalNumberId.addEventListener("click", jFClickNumberId);


    let jVarLocalPurposeId = document.getElementById("PurposeId");
    jVarLocalPurposeId.addEventListener("click", jFClickPurposeId);

    let jVarLocalName1Id = document.getElementById("Name1Id");
    jVarLocalName1Id.addEventListener("click", jFClickName1Id);

    let jVarLocalName2Id = document.getElementById("Name2Id");
    jVarLocalName2Id.addEventListener("click", jFClickName2Id);

    let jVarLocalVillageId = document.getElementById("VillageId");
    jVarLocalVillageId.addEventListener("click", jFClickVillageId);

    let jVarLocalLandId = document.getElementById("LandId");
    jVarLocalLandId.addEventListener("click", jFClickLandId);

    let jVarLocalName3Id = document.getElementById("Name3Id");
    jVarLocalName3Id.addEventListener("click", jFClickName3Id);

    let jVarLocalDateId = document.getElementById("DateId");
    jVarLocalDateId.addEventListener("click", jFClickDateId);


};



export { StartFunc, jFAddListeners}
