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

    let jVarLocalPage1Alter = document.getElementsByClassName("AlterButtonClass");

    for (let i = 0; i < jVarLocalPage1Alter.length; i++) {
        jVarLocalPage1Alter[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            // document.location=`../Page/page1.html?LoanNumber=${jvarFileName}`;
            document.location = `../Page/LoanAlter/LoanAlter.html?LoanNumber=${jvarFileName}`
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

    let jVarLocalPage3 = document.getElementsByClassName("Page3");
    for (let i = 0; i < jVarLocalPage3.length; i++) {
        jVarLocalPage3[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Page3/Page3.html?LoanNumber=${jvarFileName}`;
        })
    };

    let jVarLocalPage4 = document.getElementsByClassName("Page4");
    for (let i = 0; i < jVarLocalPage4.length; i++) {
        jVarLocalPage4[i].addEventListener("click", function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jvarFileName = jVarLocalCurrentTarget.dataset.filename;

            document.location = `../Page4/Page4.html?LoanNumber=${jvarFileName}`
        })
    };

};



export { StartFunc }
