import { FetchPost } from "./PullData.js";
import { ReturnLoanNumber } from "./urlSearchParams.js";
import { FetchPost as FetchDocumentDetailsFetchPost } from "./FetchDocumentDetails.js";

let jFShowToDOM = async () => {
    let jVarLocalLoanNumber = ReturnLoanNumber();
    let jVarLocalUserContentId = document.getElementById("UserContentId");
    let jVarLocalPage3SecondRowId = document.getElementById("Page3SecondRowId");

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

    // Object.values(jVarLocalDocumentData.DocumentsInfo).forEach(function (LoopValue) {
    //     //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
    //     jVarLocalDocumentsInfoId.innerHTML += `${LoopValue.NatureDocument} No. : ${LoopValue.DocumentNo},
    //      ${LoopValue.Discription}, `;
    // });


    // Array.from(jVarLocalName3Id).forEach(element => {
    //     element.innerHTML = jVarLocalDataAsJson.Name3;
    // });

    jFShowToDOMTitleDeed({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMVillageAccounts({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMEC({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMApplicant({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMEnlistedDocuments({ inLoanNumber: jVarLocalLoanNumber });
    jFShowToDOMDocumentsInfo({ inLoanNumber: jVarLocalLoanNumber });
    jFShowExtentTotalAcerage({ inLoanNumber: jVarLocalLoanNumber });
    jFShowPage3Amout({ inLoanNumber: jVarLocalLoanNumber });
    jFPurposeId({ inLoanNumber: jVarLocalLoanNumber });
    jFPage3SecondRow({ inLoanNumber: jVarLocalLoanNumber });
    jFPage3Minor({ inLoanNumber: jVarLocalLoanNumber });
    jFPage3GPA({ inLoanNumber: jVarLocalLoanNumber });

    jVarLocalBranchId.innerHTML = jVarLocalDocumentData.PageInfo.BranchId;

    //    jVarLocalBranchId.innerHTML = "aaaaaa";

};

let jFShowToDOMDocumentsInfo = ({ inLoanNumber }) => {
    let jVarLocalDocumentsInfoId = document.getElementById("DocumentsInfoId");

    //let jVarLocalUserContentId = document.getElementById("UserContentId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);
    //jVarLocalDocumentsInfoId.innerHTML = "aaaaaaaa";

    let jVarLocalDocumentsArray = Object.values(jVarLocalDocumentData.DocumentsInfo);

    let jVarLocalTitleArray = _.filter(jVarLocalDocumentsArray, { 'NatureDocument': "Sale deed" });

    jVarLocalTitleArray.forEach(function (LoopValue) {
        //jVarLocalDocumentsInfoId.innerHTML = JSON.stringify(jVarLocalDocumentData.DocumentsInfo);
        jVarLocalDocumentsInfoId.innerHTML += ` ${LoopValue.NatureDocument} No. : ${LoopValue.DocumentNo},
         ${LoopValue.Discription}; `;
    });
};

let jFShowToDOMEnlistedDocuments = ({ inLoanNumber }) => {
    let jVarLocalEnlistedId = document.getElementById("EnlistedDocumentsId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalEnlistedId.innerHTML = jVarLocalDocumentData.PageInfo.EnlistedDocuments;
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

let jFShowExtentTotalAcerage = ({ inLoanNumber }) => {
    let jVarLocalExtentTotalId = document.getElementById("AcerageId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    let jVarLocalExtents = Object.values(jVarLocalDocumentData.ExtentsInfo).map(p => parseFloat(p.Extents));
    console.log("jVarLocalExtents : ", jVarLocalExtents);
    jVarLocalExtentTotalId.innerHTML = jVarLocalExtents.reduce((a, b) => a + b, 0)
};

let jFShowPage3Amout = ({ inLoanNumber }) => {
    let jVarLocalPage3AmoutId = document.getElementById("Page3AmoutId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalPage3AmoutId.innerHTML = jVarLocalDocumentData.PageInfo.Page3Amout;
};

let jFPurposeId = ({ inLoanNumber }) => {
    let jVarLocalPurposeId = document.getElementById("PurposeId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalPurposeId.innerHTML = jVarLocalDocumentData.PageInfo.Purpose;
    jVarLocalPurposeId.innerHTML += `, ${jVarLocalDocumentData.PageInfo.Purpose1}`;
    jVarLocalPurposeId.innerHTML += `, ${jVarLocalDocumentData.PageInfo.Purpose2}`;
    jVarLocalPurposeId.innerHTML += `, ${jVarLocalDocumentData.PageInfo.Purpose3}`;
};

let jFPage3SecondRow = ({ inLoanNumber }) => {
    let jVarLocalPage3SecondRowId = document.getElementById("Page3SecondRowId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalPage3SecondRowId.innerHTML = jVarLocalDocumentData.PageInfo.Page3SecondRow;
};

let jFPage3Minor = ({ inLoanNumber }) => {
    let jVarLocalPage3MinorId = document.getElementById("Page3MinorId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalPage3MinorId.innerHTML = jVarLocalDocumentData.PageInfo.Page3Minor;
};

let jFPage3GPA = ({ inLoanNumber }) => {
    let jVarLocalPage3GPAId = document.getElementById("Page3GPAId");
    let jVarLocalDocumentInfoFromLocalStorage = localStorage.getItem(`${inLoanNumber}.json`);
    let jVarLocalDocumentData = JSON.parse(jVarLocalDocumentInfoFromLocalStorage);

    jVarLocalPage3GPAId.innerHTML = jVarLocalDocumentData.PageInfo.Page3GPA;
};
export {
    jFShowToDOM
};