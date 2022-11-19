let ToMainTag = async () => {
    const jVarLocalMain = document.getElementsByTagName("main")[0];

    const section1 = await fetch('./Templates/section1.html');
    const movies = await section1.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', movies);


    const section2 = await fetch('./Templates/section2.html');
    const section2Html = await section2.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section2Html);

    const section9 = await fetch('./Templates/section9.html');
    const section9Html = await section9.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section9Html);


    //     jVarLocalMain.insertAdjacentElement("afterbegin",
    // new DOMParser().parseFromString("<div> Hello </div>", "text/html").documentElement);

};

export { ToMainTag }
