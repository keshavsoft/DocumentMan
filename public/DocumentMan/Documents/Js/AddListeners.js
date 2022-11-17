import { SaveClickFunc } from "./ClickFuncs.js";
import { FromHbs } from "./ShowTable.js";

let StartFunc = () => {
    let jVarLocalsaveClick = document.getElementById("save");

    jVarLocalsaveClick.addEventListener("click", SaveClickFunc);

    let jVarLocalFileToSaveClick = document.getElementById("InfileTosaveId");

    jVarLocalFileToSaveClick.addEventListener("click", SaveClickFunc);

    document.addEventListener("DOMContentLoaded", FromHbs);
};

let StartFuncShow = async () => {
    let jVarLocalClassName = document.getElementsByClassName("ShowDocumentClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Page/page1Show.html?DocumentNumber=${jvarFileName}`


            console.log("llllllllllll--", jvarFileName);
        })
    };
};




export { StartFunc, StartFuncShow }
