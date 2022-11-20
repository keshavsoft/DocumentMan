
let ToMainTag = async ({ inProjectName }) => {
    const jVarLocalMain = document.getElementsByTagName("main")[0];

    const section1 = await fetch(`/${inProjectName}/Page/Templates/section1.html`);
    const movies = await section1.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', movies);

    const section2 = await fetch(`/${inProjectName}/Page/Templates/section2.html`);
    const section2Html = await section2.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section2Html);

    const section3 = await fetch(`/${inProjectName}/Page/Templates/section3.html`);
    const section3Html = await section3.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section3Html);

    const section4 = await fetch(`/${inProjectName}/Page/Templates/section4.html`);
    const section4Html = await section4.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section4Html);

    const section5 = await fetch(`/${inProjectName}/Page/Templates/section5.html`);
    const section5Html = await section5.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section5Html);

    const section6 = await fetch(`/${inProjectName}/Page/Templates/section6.html`);
    const section6Html = await section6.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section6Html);

    const section7 = await fetch(`/${inProjectName}/Page/Templates/section7.html`);
    const section7Html = await section7.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section7Html);

    const section8 = await fetch(`/${inProjectName}/Page/Templates/section8.html`);
    const section8Html = await section8.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section8Html);

    const section9 = await fetch(`/${inProjectName}/Page/Templates/section9.html`);
    const section9Html = await section9.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section9Html);

    const section10 = await fetch(`/${inProjectName}/Page/Templates/section10.html`);
    const section10Html = await section10.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section10Html);

};

export { ToMainTag }
