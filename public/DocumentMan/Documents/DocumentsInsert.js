import { getAll as FromLoansgetAll } from "./Js/FromLoans/ShowLoans.js";
import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";
import { ReturnLoanNumber } from "./Js/urlSearchParams.js";
import {ShowInDom  } from "./Js/ToDom/LoanRef.js";

let jVarLocalLoanNumber = ReturnLoanNumber();

ShowInDom({inLoanRef:jVarLocalLoanNumber});

console.log("jVarLocalLoanNumber--",jVarLocalLoanNumber);


FromLoansgetAll().then(PromiseData => {
    let Datalist = '';

    PromiseData.forEach((ListItems) => {
        Datalist += '<option value="' + ListItems + '" />';
    });

    document.getElementById("DocumentList").innerHTML = Datalist;
});

AddListenersStartFunc();