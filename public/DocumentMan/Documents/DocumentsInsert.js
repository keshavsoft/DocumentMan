import { getAll as FromLoansgetAll } from "./Js/FromLoans/ShowLoans.js";
import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";
import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import { ShowInDom } from "./Js/ToDom/LoanRef.js";
import { ShowInDom as FillTableShowInDom } from "./Js/ToDom/FillTable.js";

let jVarLocalLoanNumber = ReturnLoanNumber();

FromLoansgetAll().then(PromiseData => {
    let Datalist = '';

    PromiseData.forEach((ListItems) => {
        Datalist += '<option value="' + ListItems.split(".")[0] + '" />';
    });

    document.getElementById("DocumentList").innerHTML = Datalist;

    ShowInDom({ inLoanRef: jVarLocalLoanNumber });
    FillTableShowInDom({ inLoanRef: jVarLocalLoanNumber }).then();
});

AddListenersStartFunc();