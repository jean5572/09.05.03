//DOMLOADED - JEAN
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
});


//KONTAKT FORMULAR - VIVI


const link = "http://creativeworld.dk/kea02/tema09/09.05.03/wordpress/wp-json/wp/v2/pages";

document.addEventListener("DOMContentLoaded", hentData);


async function hentData() {
    const respons = await fetch(link);
    forside = await respons.json();
    vis(forside);
    console.log('DataHentet')
}

function vis(forside) {
    console.log(forside)
    document.querySelector(".frontpage-values-parent").innerHTML = forside.excerpt.rendered;
    //                document.querySelector(".beskrivelse").innerHTML = forside.content.rendered;

}
