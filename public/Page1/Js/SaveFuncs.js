let FetchPost = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/Documents";
    let jVarLocalData = localStorage.getItem("BranchId");
    console.log("jVarLocalData : ", jVarLocalData);

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ BranchId: jVarLocalData })
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
    console.log("Save--------------");

};

export {
    FetchPost
}