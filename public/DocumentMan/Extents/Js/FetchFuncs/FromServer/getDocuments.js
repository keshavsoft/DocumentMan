let GetFunc = async ({ inLoanRef }) => {
    let jVarLocalFetchUrl = `/DocumentMan/ExtentsDetails/${inLoanRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    return await data;
};

export { GetFunc }