import { FetchPost } from "./PullData.js";
import { ReturnLoanNumber } from "./urlSearchParams.js";

let jFShowToDOM = async () => {
    let jVarLocalLoanNumber = ReturnLoanNumber();
    let jVarLocalUserContentId = document.getElementById("UserContentId");
    console.log("jVarLocalUserContentId : ", jVarLocalUserContentId);
    await FetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` });
    let jVarLocalDataToShow = localStorage.getItem("Document");

    jVarLocalUserContentId.innerHTML = JSON.parse(jVarLocalDataToShow).Page3;
};

export {
    jFShowToDOM
};