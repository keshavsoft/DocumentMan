let StartFunc = async () => {
    let jVarLocalClassName = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalClassName.length; i++) {
        jVarLocalClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Page/page1Show.html?LoanNumber=${jvarFileName}`
        })
    };

    let jVarLocalDocumentClassName = document.getElementsByClassName("ShowDocumentClass");

    for (let i = 0; i < jVarLocalDocumentClassName.length; i++) {
        jVarLocalDocumentClassName[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Documents/DocumentsShow.html?DocumentNumber=${jvarFileName}`
        })
    };

    let jVarLocalInsertDocumentClass = document.getElementsByClassName("InsertDocumentClass");

    for (let i = 0; i < jVarLocalInsertDocumentClass.length; i++) {
        jVarLocalInsertDocumentClass[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Documents/DocumentsInsert.html?DocumentNumber=${jvarFileName}`
        })
    };

    let jVarLocalInsertShowextents = document.getElementsByClassName("Insertextents");
    for (let i = 0; i < jVarLocalInsertShowextents.length; i++) {
        jVarLocalInsertShowextents[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Extents/ExtentsInsert.html?Insertextents=${jvarFileName}`
        })
    };


    let jVarLocalShowextents = document.getElementsByClassName("Showextents");
    for (let i = 0; i < jVarLocalShowextents.length; i++) {
        jVarLocalShowextents[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Extents/ExtentsShow.html?Insertextents=${jvarFileName}`
        })
    };

};



export { StartFunc }
