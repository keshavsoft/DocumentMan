let FetchPost = async () => {
    let jVarLocalFetchUrl = "/Page1/Page1";
    
    let jVarLocalData = localStorage.getItem("BranchId");
    let jVarLocalName = localStorage.getItem("Name");
    let jVarLocalLANumber = localStorage.getItem("LANumber");
    let jVarLocalPurpose = localStorage.getItem("Purpose");
    let jVarLocalName3 = localStorage.getItem("Name3");
    let jVarLocalLand = localStorage.getItem("Land");
    let jVarLocalVillage = localStorage.getItem("Village");
    let jVarLocalName2Id = localStorage.getItem("Name2Id");
    let jVarLocalName1 = localStorage.getItem("Name1");

    console.log("jVarLocalData : ", jVarLocalData);

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            BranchId: jVarLocalData,
            NameOfPACA: jVarLocalName,
            LANumber: jVarLocalLANumber,
            Purpose: jVarLocalPurpose,
            Name3: jVarLocalName3,
            Land: jVarLocalLand,
            Village: jVarLocalVillage,
            Name2Id: jVarLocalName2Id,
            Name1: jVarLocalName1

        })
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