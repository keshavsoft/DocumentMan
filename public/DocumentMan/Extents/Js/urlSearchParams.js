let ReturnLoanNumber = () => {
    let jVarLocalSearch = document.location.search;
    const params = new URLSearchParams(jVarLocalSearch);
    const q = parseInt(params.get("Insertextents"));
    console.log("q",q);

    return q;
};

export { ReturnLoanNumber }
