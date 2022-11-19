import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { FetchPost as PullDataFetchPost } from "./Js/PullData.js";
import { jFShowToDOM } from "./Js/ShowData.js";
import { ToMainTag } from "./Js/StartFuncs/ToDom.js";
import { ShowInDom as FillTableShowInDom } from "../Extents/Js/ToDom/FillTable.js";

// let jVarLocalLoanNumber = ReturnLoanNumber();

// ShowInDom({ inLoanRef: jVarLocalLoanNumber });


ToMainTag().then(() => {
    let jVarLocalLoanNumber = ReturnLoanNumber();

    if (jVarLocalLoanNumber > 0) {
        PullDataFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
            jFShowToDOM();

            FillTableShowInDom({ inLoanRef: jVarLocalLoanNumber }).then();
        });
    };
});

