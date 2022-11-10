
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

let jFClickNumberId = () => {
    Swal.fire({
        title: 'L.A.No',
        html: `<input type="text" id="NumberIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#NumberIdsweet').value;
            let jVarLocalNumberId = document.getElementById("NumberId");
            localStorage.setItem("LANumber", `${FolderName}`);
            let jVarLocalNumber = localStorage.getItem("LANumber");
            jVarLocalNumberId.innerHTML = jVarLocalNumber;
        }
    })

};

let jFClickNameId = () => {
    Swal.fire({
        title: 'Name of the PACS',
        html: `<input type="text" id="NameIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#NameIdsweet').value;
            let jVarLocalNameId = document.getElementById("NameId");
            localStorage.setItem("Name", `${FolderName}`);
            let jVarLocalName = localStorage.getItem("Name");
            jVarLocalNameId.innerHTML = jVarLocalName;
        }
    })

};

let jFClickPurposeId = () => {
    Swal.fire({
        title: 'Purpose',
        html: `<input type="text" id="PurposeIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#PurposeIdsweet').value;
            let jVarLocalPurposeId = document.getElementById("PurposeId");
            localStorage.setItem("Purpose", `${FolderName}`);
            let jVarLocalPurpose = localStorage.getItem("Purpose");
            jVarLocalPurposeId.innerHTML = jVarLocalPurpose;

        }
    })

};

let jFClickName1Id = () => {
    Swal.fire({
        title: '3)Who should mortgage the property in favour of the bank in case of sanction of loan',
        html: `<input type="text" id="Name1IdIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name1IdIdsweet').value;
            let jVarLocalName1Id = document.getElementById("Name1Id");
            localStorage.setItem("Name1", `${FolderName}`);
            let jVarLocalName1 = localStorage.getItem("Name1");
            jVarLocalName1Id.innerHTML = jVarLocalName1;
        }
    })

};


let jFClickName2Id = () => {
    Swal.fire({
        title: '2)Who is the actual title folder of the scheduled Property and mortgager',
        html: `<input type="text" id="Name2Idsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name2Idsweet').value;
            let jVarLocalName1Id = document.getElementById("Name2Id");
            localStorage.setItem("Name2Id", `${FolderName}`);
            let jVarLocalName1 = localStorage.getItem("Name2Id");
            jVarLocalName1Id.innerHTML = jVarLocalName1;


        }
    })
};

let jFClickVillageId = () => {
    Swal.fire({
        title: 'Name of the Village',
        html: `<input type="text" id="VillageIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#VillageIdsweet').value;
            let jVarLocalVillageId = document.getElementById("VillageId");
            localStorage.setItem("Village", `${FolderName}`);
            let jVarLocalVillage = localStorage.getItem("Village");
            jVarLocalVillageId.innerHTML = jVarLocalVillage;
        }
    })
};


let jFClickLandId = () => {
    Swal.fire({
        title: '1) The complete description of immovable Property of offered as security for creation of mortgage by deposits of the deeds',
        html: `<input type="text" id="LandIdsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#LandIdsweet').value;
            let jVarLocalLandId = document.getElementById("LandId");
            localStorage.setItem("Land", `${FolderName}`);
            let jvarLand = localStorage.getItem("Land");
            jVarLocalLandId.innerHTML = jvarLand;
        }
    })


};

let jFClickName3Id = () => {
    Swal.fire({
        title: 'Name of the Applicant',
        html: `<input type="text" id="Name3Idsweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#Name3Idsweet').value;
            let jVarLocalName3Id = document.getElementById("Name3Id");
            localStorage.setItem("Name3", `${FolderName}`);
            let jvarName3 = localStorage.getItem("Name3");
            jVarLocalName3Id.innerHTML = jvarName3;

        }
    })

};
let jFClickDateId = () => {
    Swal.fire({
        title: 'Date',
        html: `<input type="text" DateId="sweet" class="swal2-input" placeholder="Insert FileName "> `,
        confirmButtonText: 'Insert',
        focusConfirm: false,

        preConfirm: () => {
            const FolderName = Swal.getPopup().querySelector('#DateIdsweet').value;
            let jVarLocalDateId = document.getElementById("DateId");
            localStorage.setItem("DateId", `${FolderName}`);
            let jVarLocalDate = localStorage.getItem("DateId");
            jVarLocalDateId.innerHTML = jVarLocalDate;
        }
    })

};

let jFClickSave = async () => {

    let jVarLocalFetchUrl = "/DocumentMan/Documents";
    let jVarLocalData = localStorage.getItem("BranchId");
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
    console.log("Save--------------");

};




export {
    jFClickBranchId, jFClickNumberId,
    jFClickNameId, jFClickPurposeId,
    jFClickName1Id, jFClickName2Id,
    jFClickVillageId, jFClickLandId,
    jFClickName3Id, jFClickDateId, jFClickSave
}