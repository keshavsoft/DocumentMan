import { getAll as FromLoansgetAll } from "./Js/FromLoans/ShowLoans.js";

import { StartFunc as AddListenersStartFunc } from "./Js/AddListeners.js";

FromLoansgetAll().then(PromiseData => {
    console.log("PromiseData : ", PromiseData);
});

AddListenersStartFunc();