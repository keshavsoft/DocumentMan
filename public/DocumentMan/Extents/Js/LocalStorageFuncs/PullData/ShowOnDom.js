let ToTableBodyId = async ({ inLoanRef }) => {
    let jVarLocalTableBodyId = document.getElementById("TableBodyForExtentsId");

    if (inLoanRef in localStorage) {
        let jVarLocalData = JSON.parse(localStorage.getItem(inLoanRef));
//        const response = await fetch('/TableRow.html');

        const response = await fetch('/DocumentMan/Extents/TableRow.html');

        
        const movies = await response.text();

        var template = Handlebars.compile(movies);

        jVarLocalTableBodyId.innerHTML = template(jVarLocalData.ExtentsInfo);
    };
};

export { ToTableBodyId }
