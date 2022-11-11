
let FromHbs = async () => {
    let jVarLocalTableBodyId = document.getElementById("ButtonsId");

    let jVarLocalData = localStorage.getItem("Document");
    const response = await fetch('Button.html');
    const movies = await response.text();

    var template = Handlebars.compile(movies);

    jVarLocalTableBodyId.innerHTML = template(JSON.parse(jVarLocalData));
};

export { FromHbs }
