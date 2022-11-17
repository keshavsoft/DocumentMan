import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";
import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { ShowInDom } from "./Js/ToDom/LoanRef.js";
import { ShowInDom as FillTableShowInDom } from "./Js/ToDom/FillTable.js";

let jVarLocalLoanNumber = ReturnLoanNumber();

ShowInDom({ inLoanRef: jVarLocalLoanNumber });
FillTableShowInDom({ inLoanRef: jVarLocalLoanNumber }).then();

AddListenersStartFunc();