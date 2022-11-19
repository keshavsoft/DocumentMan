import { jFAddListeners } from "./Js/AddListeners.js";
import { ToMainTag } from "./Js/StartFuncs/ToDom.js";

ToMainTag({ inProjectName: "DocumentMan" }).then(() => {
    jFAddListeners();
});

// let jVarLocalLoanNumber = ReturnLoanNumber();

// if (jVarLocalLoanNumber > 0) {
//     PullDataFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
//         console.log("promisedata", promisedata);
//         jFShowToDOM();
//     });
// };
