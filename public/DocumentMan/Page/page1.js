import { jFAddListeners } from "./Js/AddListeners.js";
import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { FetchPost as PullDataFetchPost } from "./Js/PullData.js";
import { jFShowToDOM } from "./Js/ShowData.js";
import { ToMainTag } from "./Js/StartFuncs/ToDom.js";

ToMainTag();

// let jVarLocalLoanNumber = ReturnLoanNumber();

// if (jVarLocalLoanNumber > 0) {
//     PullDataFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
//         console.log("promisedata", promisedata);
//         jFShowToDOM();
//     });
// };

//jFAddListeners();