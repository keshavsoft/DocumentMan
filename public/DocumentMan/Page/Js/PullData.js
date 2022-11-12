let FetchPost = async () => {
    let jVarLocalFetch = "/DocumentMan/LoanDetails";

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    let responseFormData = await fetch(jVarLocalFetch, settings);
    let LocalFromFetch = await responseFormData.json();
    console.log("000000000000000",LocalFromFetch);

    return await LocalFromFetch;
};

export {
    FetchPost
}