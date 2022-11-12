let StartFunc = async () => {
    let jVarLocalClassName = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
           let jvarFileName = jVarLocalCurrentTarget.dataset.filename;
            console.log("llllllllllll--", jvarFileName);

        })
    };

};


export { StartFunc }
