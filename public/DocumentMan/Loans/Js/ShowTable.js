import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
//import { StartFuncShow } from "../../Documents/Js/AddListeners.js";

let FromHbs = async () => {
    let jVarLocalFetchHtml = "/DocumentMan/Loans/Table.html"
    const response = await fetch(jVarLocalFetchHtml);
    const movies = await response.text();
    return await movies;
};

let FromData = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/Loans";
    let responseFormData = await fetch(jVarLocalFetchUrl);
    let data = await responseFormData.json();

    let LocalFileNamesOnly = data.map(element => {
        return parseInt(element.split(".")[0]);
    });
    let SortedData = LocalFileNamesOnly.sort((a, b) => a - b); // For ascending sort

    return await SortedData;
};

let StartFunc = async () => {
    let jVarLocalTbody = document.getElementById("TableBodyId");
    let jVarLocalHbas = await FromHbs();
    let jVarLocalData = await FromData();
    jVarLocalData.sort((f, s) => s - f);

    var template = Handlebars.compile(jVarLocalHbas);

    let jVarLocalTemplate = template(jVarLocalData);
    jVarLocalTbody.innerHTML = jVarLocalTemplate;

    AddListenersStartFunc();
};

export { StartFunc }
