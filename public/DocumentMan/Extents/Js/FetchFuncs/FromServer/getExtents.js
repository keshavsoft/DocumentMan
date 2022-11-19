let GetFunc = async ({ inLoanRef }) => {
    let jVarLocalFetchUrl = `/DocumentMan/DocumentDetails/${inLoanRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();
    return await data;
};

export { GetFunc }