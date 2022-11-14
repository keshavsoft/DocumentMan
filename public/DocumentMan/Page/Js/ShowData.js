let jFShowToDOM = () => {
    let jVarLocalKey = "BranchId";
    let jVarLocalBranchId = document.getElementById(jVarLocalKey);
    let jVarLocalFromLocalstorage = localStorage.getItem("PageInfo");
    let jVarLocalFromLocalstorageJson = JSON.parse(jVarLocalFromLocalstorage);

    jVarLocalBranchId.innerHTML = jVarLocalFromLocalstorageJson[jVarLocalKey];
};

export {
    jFShowToDOM
}