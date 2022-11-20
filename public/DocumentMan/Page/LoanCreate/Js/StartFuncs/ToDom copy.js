import { section1 } from "../../../TemplatesJs/Section1.js";
import { section2 } from "../../../TemplatesJs/Section2.js";
import { section3 } from "../../../TemplatesJs/Section3.js";
import { section4 } from "../../../TemplatesJs/Section4.js";
import { section5 } from "../../../TemplatesJs/Section5.js";
import { section6 } from "../../../TemplatesJs/Section6.js";
import { section7 } from "../../../TemplatesJs/Section7.js";
import { section8 } from "../../../TemplatesJs/Section8.js";
import { section9 } from "../../../TemplatesJs/Section9.js";
// import { section10 } from "../../../TemplatesJs/Section10.js";

let ToMainTag = async ({ inProjectName }) => {

    const jVarLocalMain = document.getElementsByTagName("main")[0];

    // const section1 = await fetch(`/${inProjectName}/Page/Templates/section1.html`);
    // const movies = await section1.text();

    // jVarLocalMain.insertAdjacentHTML('beforeend', movies);

    const section2 = await fetch(`/${inProjectName}/Page/Templates/section2.html`);
    const section2Html = await section2.text();

    jVarLocalMain.insertAdjacentHTML('beforeend', section2Html);

    section1({inProjectName});
    // section2({inProjectName, mainTag: jVarLocalMain});
    // section3({inProjectName, mainTag: jVarLocalMain});
    // section4({inProjectName, mainTag: jVarLocalMain});
    // section5({inProjectName, mainTag: jVarLocalMain});
    // section6({inProjectName, mainTag: jVarLocalMain});
    // section7({inProjectName, mainTag: jVarLocalMain});
    // section8({inProjectName, mainTag: jVarLocalMain});
    // section9({inProjectName, mainTag: jVarLocalMain});
    // section10({inProjectName, mainTag: jVarLocalMain});

   
};

export { ToMainTag }
