import { FetchPost } from "./PullData.js";
import { ReturnLoanNumber } from "./urlSearchParams.js";
import { FetchPost as FetchDocumentDetailsFetchPost } from "./FetchDocumentDetails.js";

let jFShowToDOM = async () => {
    let jVarLocalLoanNumber = ReturnLoanNumber();
    let jVarLocalUserContentId = document.getElementById("UserContentId");
    let jVarLocalPage3SecondRowId = document.getElementById("Page3SecondRowId");
    let jVarLocalEnlistedId = document.getElementById("EnlistedDocumentsId");
    let jVarLocalDocumentsInfoId = document.getElementById("DocumentsInfoId");
    let jVarLocalBranchId = document.getElementById("BranchId");

    //await FetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` });
    await FetchDocumentDetailsFetchPost({ inLoanNumber: `${jVarLocalLoanNumber}.json` });

    // let jVarLocalDataToShow = localStorage.getItem("Document");
    // let jVarLocalDataAsJson = JSON.parse(jVarLocalDataToShow);

    // jVarLocalUserContentId.innerHTML = JSON.parse(jVarLocalDataToShow).Page3;
    // jVarLocalPage3SecondRowId.innerHTML = JSON.parse(jVarLocalDataToShow).Page3SecondRow;

    // jVarLocalEnlistedId.innerHTML = jVarLocalDataAsJson.EnlistedDocuments;

    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${jVarLocalLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);
    console.log("jVarLocalDocumentData : ", jVarLocalDocumentData);

    Object.values(jVarLocalDocumentData.DocumentsInfo).forEach(function (LoopValue) {
        //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
        jVarLocalDocumentsInfoId.innerHTML += `${LoopValue.NatureDocument} No. : ${LoopValue.DocumentNo},
         ${LoopValue.Discription}, `;
    });


    // Array.from(jVarLocalName3Id).forEach(element => {
    //     element.innerHTML = jVarLocalDataAsJson.Name3;
    // });

    jFShowToDOMTitleDeed({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMVillageAccounts({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMEC({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMApplicant({ inLoanNumber: jVarLocalLoanNumber });
    jVarLocalBranchId.innerHTML = jVarLocalDocumentData.PageInfo.BranchId;

    //    jVarLocalBranchId.innerHTML = "aaaaaa";

};

let jFShowToDOMApplicant = ({ inLoanNumber }) => {
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    let jVarLocalName3Id = document.getElementsByClassName("Name3Class");

    Array.from(jVarLocalName3Id).forEach(element => {
        element.innerHTML = jVarLocalDocumentData.PageInfo.Name3;
    });
};


let jFShowToDOMTitleDeed = ({ inLoanNumber }) => {
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    let jVarLocalDocumentsArray = Object.values(jVarLocalDocumentData.DocumentsInfo);
    let jVarLocalTitleArray = _.filter(jVarLocalDocumentsArray, { 'NatureDocument': "Title deed" });
    console.log("jVarLocalDocumentsArray : ", jVarLocalDocumentsArray, jVarLocalTitleArray);
    let jVarLocalTitleDeedId = document.getElementById("TitleDeedId");

    jVarLocalTitleDeedId.innerHTML = "I have perused";

    jVarLocalTitleArray.forEach(function (LoopValue) {
        //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
        jVarLocalTitleDeedId.innerHTML += ` ${LoopValue.NatureDocument} No. : ${LoopValue.DocumentNo},
         ${LoopValue.Discription}; `;
    });
    jVarLocalTitleDeedId.innerHTML += ` in favour of applicant is genuine.`;

    //    jVarLocalTitleDeedId.innerHTML = `I have perused Title deed was issued by Tahasildar,I.Polavaram in favour of applicant is genuine.`;
};

let jFShowToDOMVillageAccounts = ({ inLoanNumber }) => {
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    let jVarLocalDocumentsArray = Object.values(jVarLocalDocumentData.DocumentsInfo);
    let jVarLocalTitleArray = _.filter(jVarLocalDocumentsArray, { 'NatureDocument': "Village Accounts" });
    console.log("jVarLocalDocumentsArray : ", jVarLocalDocumentsArray, jVarLocalTitleArray);
    let jVarLocalTitleDeedId = document.getElementById("VillageAccountsId");

    jVarLocalTitleDeedId.innerHTML = "I have perused";

    jVarLocalTitleArray.forEach(function (LoopValue) {
        //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
        jVarLocalTitleDeedId.innerHTML += ` ${LoopValue.NatureDocument}, Dated : ${LoopValue.DocumentDate},
         ${LoopValue.Discription}; `;
    });
    jVarLocalTitleDeedId.innerHTML += ` in favour of applicant.`;

    //    jVarLocalTitleDeedId.innerHTML = `I have perused Title deed was issued by Tahasildar,I.Polavaram in favour of applicant is genuine.`;
};

let jFShowToDOMEC = ({ inLoanNumber }) => {
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    let jVarLocalDocumentsArray = Object.values(jVarLocalDocumentData.DocumentsInfo);
    let jVarLocalTitleArray = _.filter(jVarLocalDocumentsArray, { 'NatureDocument': "EC" });
    let jVarLocalTitleDeedId = document.getElementById("ECId");

    jVarLocalTitleDeedId.innerHTML = "I have perused";

    jVarLocalTitleArray.forEach(function (LoopValue) {
        //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
        jVarLocalTitleDeedId.innerHTML += ` ${LoopValue.NatureDocument}, Dated : ${LoopValue.DocumentDate},
         ${LoopValue.Discription}; `;
    });
    jVarLocalTitleDeedId.innerHTML += " and reveals that there is no subsisting encumbrances over the scheduled property.";

    //    jVarLocalTitleDeedId.innerHTML = `I have perused Title deed was issued by Tahasildar,I.Polavaram in favour of applicant is genuine.`;
};

export {
    jFShowToDOM
};