let FetchPost = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/Page1";

    let jVarLocalDate = localStorage.getItem("DocumentDate");
    let jVarLocalData = localStorage.getItem("BranchId");
    let jVarLocalName = localStorage.getItem("Name");
    let jVarLocalLANumber = localStorage.getItem("LANumber");
    let jVarLocalPurpose = localStorage.getItem("Purpose");
    let jVarLocalPurpose1 = localStorage.getItem("Purpose1");
    let jVarLocalPurpose2 = localStorage.getItem("Purpose2");
    let jVarLocalPurpose3 = localStorage.getItem("Purpose3");

    let jVarLocalName3 = localStorage.getItem("Name3");
    let jVarLocalLand = localStorage.getItem("Land");
    let jVarLocalVillage = localStorage.getItem("Village");
    let jVarLocalName2Id = localStorage.getItem("Name2Id");
    let jVarLocalName1 = localStorage.getItem("LANo");
    let jVarLocalServeyNo1 = localStorage.getItem("ServeyNo1");
    let jVarLocalServeyNo2 = localStorage.getItem("ServeyNo2");
    let jVarLocalServeyNo3 = localStorage.getItem("ServeyNo3");
    let jVarLocalServeyNo4 = localStorage.getItem("ServeyNo4");
    let jVarLocalServeyNoTotal = localStorage.getItem("ServeyNoTotal");
    let jVarLocalVillaageId = localStorage.getItem("VillaageId");
    let jVarLocalLaNo = localStorage.getItem("LaNo");

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            DocumentDate: jVarLocalDate,
            BranchId: jVarLocalData,
            NameOfPACA: jVarLocalName,
            LANumber: jVarLocalLANumber,
            Purpose: jVarLocalPurpose,
            Purpose1: jVarLocalPurpose1,
            Purpose2: jVarLocalPurpose2,
            Purpose3: jVarLocalPurpose3,
            Name3: jVarLocalName3,
            Land: jVarLocalLand,
            Village: jVarLocalVillage,
            Name2Id: jVarLocalName2Id,
            LANo: jVarLocalName1,
            ServeyNo1: jVarLocalServeyNo1,
            ServeyNo2: jVarLocalServeyNo2,
            ServeyNo3: jVarLocalServeyNo3,
            ServeyNo4: jVarLocalServeyNo4,
            ServeyNoTotal: jVarLocalServeyNoTotal,
            VillaageId: jVarLocalVillaageId,
            LaNo:jVarLocalLaNo


        })
    };

    let response = await fetch(jVarLocalFetchUrl, settings);
    console.log("response", jVarLocalFetchUrl);
    let data = await response.text();
    console.log("ssssssssss : ", data);
    //return data;
    console.log("Save-----lll---------");

};

export {
    FetchPost
}