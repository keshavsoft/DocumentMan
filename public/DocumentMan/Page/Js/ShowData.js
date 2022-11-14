let jFShowToDOM = () => {

    let jFShowToDOMNameOfBranchId = () => {
        let jVarLocalKey = "BranchId";
        let jVarLocalBranchId = document.getElementById(jVarLocalKey);

        let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalBranchId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfBranchId();

    let jFShowToDOMNameOfPACA = () => {
        let jVarLocalKey = "NameOfPACA";
        let jVarLocalNameId = document.getElementById("NameId");

        let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalNameId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfPACA();

    let jFShowToDOMNameOfNumberId = () => {
        let jVarLocalKey = "LANumber";
        let jVarLocalNumberId = document.getElementById("NumberId");

        let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalNumberId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfNumberId();

    let jFShowToDOMNameOfPurposeId = () => {
        let jVarLocalKey = "Purpose";
        let jVarLocalPurposeId = document.getElementById("PurposeId");

        let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfPurposeId();

    let jFShowToDOMNameOfName3Id = () => {
        let jVarLocalKey = "Name3";
        let jVarLocalName3Id = document.getElementById("Name3Id");

        let jVarLocalFromLocalstorage = localStorage.getItem("Name3");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfName3Id();

    let jFShowToDOMNameOfLandId = () => {
        let jVarLocalKey = "Land";
        let jVarLocalLand = document.getElementById("LandId");

        let jVarLocalFromLocalstorage = localStorage.getItem("Land");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalLand.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfLandId();

    let jFShowToDOMNameOfVillageId = () => {
        let jVarLocalKey = "Village";
        let jVarLocalVillage = document.getElementById("VillageId");

        let jVarLocalFromLocalstorage = localStorage.getItem("Village");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalVillage.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfVillageId();

    let jFShowToDOMNameOfName2Id = () => {
        let jVarLocalKey = "Name2Id";
        let jVarLocalName2Id = document.getElementById("Name2Id");

        let jVarLocalFromLocalstorage = localStorage.getItem("Name2Id");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalName2Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfName2Id();

    let jFShowToDOMNameOfName1 = () => {
        let jVarLocalKey = "Name1";
        let jVarLocalName1 = document.getElementById("Name1Id");

        let jVarLocalFromLocalstorage = localStorage.getItem("Name1");
        let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

        jVarLocalName1.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

    };
    jFShowToDOMNameOfName1();

};

export {
    jFShowToDOM
}