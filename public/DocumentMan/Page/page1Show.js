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

            ExtentsShowInDom({ inLoanRef: jVarLocalLoanNumber }).then(() => {
                jFShowExtentTotal();
            });
        });
    };
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


