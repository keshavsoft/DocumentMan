let ShowInDom = ({ inLoanRef }) => {

    let jVarLocalFileName = document.getElementById("InPutFileName");
    jVarLocalFileName.value = inLoanRef
    console.log("inLoanRef------", inLoanRef);


};

export { ShowInDom }