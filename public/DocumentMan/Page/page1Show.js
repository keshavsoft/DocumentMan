import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { FetchPost as PullDataFetchPost } from "./Js/PullData.js";
import { jFShowToDOM } from "./Js/ShowData.js";
import { ToMainTag } from "./Js/StartFuncs/ToDom.js";
import { ShowInDom as ExtentsShowInDom } from "../Extents/Js/ToDom/FillTable.js";

ToMainTag().then(() => {
    let jVarLocalLoanNumber = ReturnLoanNumber();

    if (jVarLocalLoanNumber > 0) {
        PullDataFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
            jFShowToDOM();

            ExtentsShowInDom({ inLoanRef: jVarLocalLoanNumber }).then();
        });
    };
});

