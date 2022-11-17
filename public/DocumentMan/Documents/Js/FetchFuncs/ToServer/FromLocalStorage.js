let PostFunc = async () => {
    let jVarLocalInputFileName = document.getElementById("InPutFileName");
    let jVarLocalLoanRef = jVarLocalInputFileName.value;

    // let jVarLocalFetchUrl = "/DocumentMan/LoanDetails/Save";
    let jVarLocalFetchUrl = `/DocumentMan/DocumentDetails/Insert/${jVarLocalLoanRef}.json`;

    //let jVarLocalData = localStorage.getItem(InFileName);
    let LocalSaveData = LocalPrepareBodyData({ inLoanRef: jVarLocalLoanRef });

    const settings = {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(LocalSaveData)
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.json();
    return await data;
};

let LocalPrepareBodyData = ({ inLoanRef }) => {
    let jVarLocalData = localStorage.getItem(inLoanRef);
    return JSON.parse(jVarLocalData).DocumentsInfo;
};

export { PostFunc }