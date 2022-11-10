import { StartFunc as ToLocalStorageStartFunc } from "./ToLocalStorage.js";


let jFClickDateId = ({Date}) => {
    Swal.fire({
        title: 'Date',
        html: `<input type="text" DateId="sweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#DateIdsweet').value;
            return { Date: FolderName }
        }
    })

};
let jFClickBranchId = () => {
    Swal.fire({
        title: 'Name of the DCCB Branch',
        html: `<input type="text" id="BranchIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#BranchIdsweet').value;
            let jVarLocalBranchId = document.getElementById("BranchId");
            localStorage.setItem("BranchId", `${FolderName}`);
            let jVarLocalBranchName = localStorage.getItem("BranchId");
            jVarLocalBranchId.innerHTML = jVarLocalBranchName;
        }
    })

};
console.log("jFClickDateId",jFClickDateId);

let SaveClickFunc = async (event) => {

    let jVarLocalTableBodyId = document.getElementById("TableBodyId");

    let jVarLocalDocumentNo = document.getElementById("DocumentId").value;
    let jVarLocalDocumentDate = document.getElementById("DocumentDateId").value;
    let jVarLocalNatureDocument = document.getElementById("NatureDocumentId").value;
    let jVarLocalCopyXerox = document.getElementById("CopyXeroxId").value;
    let jVarLocalPageNo = document.getElementById("PageNoId").value;

    let saveData = {};

    saveData[jVarLocalTableBodyId.rows.length + 1] = {
        DocumentNo: jVarLocalDocumentNo,
        DocumentDate: jVarLocalDocumentDate,
        NatureDocument: jVarLocalNatureDocument,
        CopyXerox: jVarLocalCopyXerox,
        PageNo: jVarLocalPageNo
    };

    ToLocalStorageStartFunc({ inDataToSave: saveData });
    // window.location.href = "";
    await LocalPostToServer();
    console.log("jVarLocalFromValidate:------");
};

let LocalPostToServer = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/Documents";
    let jVarLocalData = localStorage.getItem("Document");
    console.log("jVarLocalData : ", jVarLocalData);
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(JSON.parse(jVarLocalData))
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
};

export { SaveClickFunc, jFClickDateId ,jFClickBranchId}