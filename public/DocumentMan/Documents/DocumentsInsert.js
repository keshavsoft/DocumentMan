import { getAll as FromLoansgetAll } from "./Js/FromLoans/ShowLoans.js";

import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";

FromLoansgetAll().then(PromiseData => {

    let Datalist = '';
    let htmlstring = PromiseData.forEach((ListItems) => {
        Datalist += '<option value="' + ListItems + '" />';
    });

    document.getElementById("DocumentList").innerHTML = Datalist;

    console.log("PromiseData :--------- ", PromiseData);
});

AddListenersStartFunc();