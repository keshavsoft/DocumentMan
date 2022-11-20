let section1 = async ({ inProjectName }) => {

    const jVarLocalMain = document.getElementsByTagName("main")[0];


    const section1 = await fetch(`/${inProjectName}/Page/Templates/section1.html`);
    const movies = await section1.text();
    let Sectio1Html = jVarLocalMain.insertAdjacentHTML('beforeend', movies);

    return await Sectio1Html;

};

export { section1 };