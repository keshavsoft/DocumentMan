let FetchToSerVer = async ({ InFileName }) => {
    let jVarLocalFetchUrl = "/DocumentMan/LoanDetails/Save";

    let jVarLocalData = localStorage.getItem(InFileName);
    let LocalSaveData = JSON.parse(jVarLocalData)

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ InToSAve: LocalSaveData, InFileName })
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    //return data;
};

export { FetchToSerVer }