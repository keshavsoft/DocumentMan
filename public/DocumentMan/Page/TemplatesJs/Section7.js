let section7 = async ({ inProjectName, mainTag }) => {

    const section1 = await fetch(`/${inProjectName}/Page/Templates/section7.html`);
    const movies = await section1.text();
    let Sectio1Html = mainTag.insertAdjacentHTML('beforeend', movies);

    return await Sectio1Html;

};

export { section7 };