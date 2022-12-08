import { ReturnLoanNumber } from "../Js/urlSearchParams.js";
import { FetchPost as JsonDataToLocalStorage } from "./Js/PullData.js";
import { jFShowToDOM as LocalStorageToDom } from "./Js/ShowData.js";
import { ToMainTag as HtmlTemplatesToDom } from "./Js/StartFuncs/ToDom.js";
import { ShowInDom as ExtentsShowInDom } from "../../Extents/Js/ToDom/FillTable.js";
import { jFAddListeners } from "./Js/AddListeners.js";

HtmlTemplatesToDom().then(() => {
    let jVarLocalLoanNumber = ReturnLoanNumber();

    if (jVarLocalLoanNumber > 0) {
        JsonDataToLocalStorage({ inLoanNumber: `${jVarLocalLoanNumber}.json` }).then((promisedata) => {
            LocalStorageToDom();

            jFAddListeners();

            ExtentsShowInDom({ inLoanRef: jVarLocalLoanNumber }).then(() => {
            });
        });
    };
});


