import { FetchPost } from "./PullData.js";
import { ReturnLoanNumber } from "./urlSearchParams.js";

let jFShowToDOM = async () => {
    let jVarLocalLoanNumber = ReturnLoanNumber();
    let jVarLocalUserContentId = document.getElementById("UserContentId");
    let jVarLocalPage3SecondRowId = document.getElementById("Page3SecondRowId");

    await FetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` });
    let jVarLocalDataToShow = localStorage.getItem("Document");

    jVarLocalUserContentId.innerHTML = JSON.parse(jVarLocalDataToShow).Page3;
    jVarLocalPage3SecondRowId.innerHTML = JSON.parse(jVarLocalDataToShow).Page3SecondRow;
};

export {
    jFShowToDOM
};