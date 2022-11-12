import { jFAddListeners } from "./Js/AddListeners.js";
import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { FetchPost as PullDataFetchPost } from "./Js/PullData.js";

let jVarLocalLoanNumber = ReturnLoanNumber();

if (jVarLocalLoanNumber > 0) {

    PullDataFetchPost().then((promisedata) => {
        console.log("promisedata", promisedata);

    });
  
};



jFAddListeners();