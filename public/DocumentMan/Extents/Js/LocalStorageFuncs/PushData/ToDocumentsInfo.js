let jFInsert = ({ inData, inLoanRef }) => {
    localStorage.setItem(inLoanRef, JSON.stringify(inData));
};

export { jFInsert }
