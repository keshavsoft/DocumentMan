let section2 = async ({ inProjectName, mainTag }) => {

    const section1 = await fetch(`/${inProjectName}/Page/Templates/section2.html`);
    const movies = await section1.text();
    let Sectio1Html = mainTag.insertAdjacentHTML('beforeend', movies);

    return await Sectio1Html;

};

export { section2 };