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

            ExtentsShowInDom({ inLoanRef: jVarLocalLoanNumber }).then(() => {
                // jFShowExtentTotal();
            });
        });
    };
    jFAddListeners();

});

let jFShowExtentTotal = () => {
    let jVarLocalExtentTotalId = document.getElementById("ExtentTotalId");
    let jVarLocalTableBodyId = document.getElementById("TableBodyForExtentsId");

    let sumVal = 0;

    let tr = jVarLocalTableBodyId.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td");
        sumVal = sumVal + parseFloat(td[3].innerHTML);
    };

    jVarLocalExtentTotalId.innerHTML = sumVal;
};


