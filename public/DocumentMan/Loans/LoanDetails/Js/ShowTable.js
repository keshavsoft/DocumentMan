let FromHbs = async () => {
    let jVarLocalFetchHtml = "/DocumentMan/Loans/LoanDetails/LoanDetails.html"

    const response = await fetch(jVarLocalFetchHtml);
    const movies = await response.text();
    return await movies;

};

let FromDataForLoanDetails = async () => {
    let jVarLocalFetchUrl = "/DocumentMan/LoanDetails";

    let Inputs = document.querySelectorAll("input");
    let FileNameFroAttribute = Inputs.getAttribute('data-FileName');

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: { inFileName: FileNameFroAttribute }
    };

    let responseFormData = await fetch(jVarLocalFetchUrl, settings);

    let data = await responseFormData.json();


    return await data;
};

let StartFunc = async () => {
    let jVarLocalTbody = document.getElementById("LoanDetails");
    let jVarLocalHbas = await FromHbs();
    let jVarLocalData = await FromDataForLoanDetails();

    var template = Handlebars.compile(jVarLocalHbas);

    let jVarLocalTemplate = template(jVarLocalData);
    jVarLocalTbody.innerHTML = jVarLocalTemplate


};

export { StartFunc ,FromDataForLoanDetails}
