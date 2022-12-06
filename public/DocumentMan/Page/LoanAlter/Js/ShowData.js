let jFShowToDOM = () => {

    jFShowToDOMNameOfDate();
    jFShowToDOMNameOfBranchId();
    jFShowToDOMNameOfPACA();
    jFShowToDOMNameOfNumberId();
    jFShowToDOMNameOfPurposeId();
    jFShowToDOMNameOfPurposeId1();
    jFShowToDOMNameOfPurposeId2();
    jFShowToDOMNameOfPurposeId3();
    jFShowToDOMNameOfName3Id();
    jFShowToDOMNameOfLandId();
    jFShowToDOMNameOfLaNo();
    jFShowToDOMNameOfVillaageId();
    jFShowToDomPage();
    jFShowToDomSecondRow();
    jFShowToDomPage3EnlistedDocuments();
    jFShowToDomPage3Amout();
    jFShowToDomPage3Minor();
    jFShowToDomPage3GPA();

};

let jFShowToDOMNameOfDate = () => {
    let jVarLocalKey = "DocumentDate";
    let jVarLocalDate = document.getElementById("DateId");
    console.log("jVarLocalDate : ", jVarLocalDate);
    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalDate.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};

let jFShowToDOMNameOfNumberId = () => {
    let jVarLocalKey = "LANumber";
    let jVarLocalNumberId = document.getElementById("NumberId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalNumberId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPurposeId = () => {
    let jVarLocalKey = "Purpose";
    let jVarLocalPurposeId = document.getElementById("PurposeId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPurposeId1 = () => {
    let jVarLocalKey = "Purpose1";
    let jVarLocalPurposeId = document.getElementById("PurposeId1");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPurposeId2 = () => {
    let jVarLocalKey = "Purpose2";
    let jVarLocalPurposeId = document.getElementById("PurposeId2");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPurposeId3 = () => {
    let jVarLocalKey = "Purpose3";
    let jVarLocalPurposeId = document.getElementById("PurposeId3");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalPurposeId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfVillageId = () => {
    let jVarLocalKey = "Village";
    let jVarLocalVillage = document.getElementById("VillageId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalVillage.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};

let jFShowToDOMNameOfLandId = () => {
    let jVarLocalKey = "Land";
    let jVarLocalLand = document.getElementById("LandId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalLand.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfBranchId = () => {
    let jVarLocalKey = "BranchId";
    let jVarLocalBranchId = document.getElementById(jVarLocalKey);

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalBranchId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfPACA = () => {
    let jVarLocalKey = "NameOfPACA";
    let jVarLocalNameId = document.getElementById("NameId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalNameId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfName1 = () => {
    let jVarLocalKey = "LANo";
    let jVarLocalName1 = document.getElementById("Name1Id");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName1.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfName3Id = () => {
    let jVarLocalKey = "Name3";
    let jVarLocalName3Id = document.getElementById("Name3Id");
    let jVarLocalName2IdValue = document.getElementById("Name2Id");
    let jVarLocalpropertyFavourId = document.getElementById("propertyFavourId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
    jVarLocalName2IdValue.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
    jVarLocalpropertyFavourId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];

};
let jFShowToDOMNameOfLaNo = () => {
    let jVarLocalKey = "LaNo";
    let jVarLocalName3Id = document.getElementById("LaNo");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};


let jFShowToDOMNameOfVillaageId = () => {
    let jVarLocalKey = "VillaageId";
    let jVarLocalName3Id = document.getElementById("VillaageId");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalName3Id.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};

let jFShowToDomPage = ()=>{
    let jVarLocalKey = "Page3";

    let jVarLocalpage3 = document.getElementById("Page3");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};

let jFShowToDomSecondRow = ()=>{
    let jVarLocalKey = "Page3SecondRow";

    let jVarLocalpage3 = document.getElementById("Page3SecondRow");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};

let jFShowToDomPage3EnlistedDocuments = ()=>{
    let jVarLocalKey = "EnlistedDocuments";

    let jVarLocalpage3 = document.getElementById("Page3EnlistedDocuments");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};

let jFShowToDomPage3Amout = ()=>{
    let jVarLocalKey = "Page3Amout";

    let jVarLocalpage3 = document.getElementById("P3Amout");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};

let jFShowToDomPage3Minor = ()=>{
    let jVarLocalKey = "Page3Minor";

    let jVarLocalpage3 = document.getElementById("P3Minor");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};

let jFShowToDomPage3GPA = ()=>{
    let jVarLocalKey = "Page3GPA";

    let jVarLocalpage3 = document.getElementById("P3GPA");

    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalpage3.value=jVarLocalFromLocalstorageJson[jVarLocalKey]

};


export {
    jFShowToDOM
};