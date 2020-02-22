const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://rickandmortyapi.com/api/character/";
const characterUrl = `${baseUrl}${id}`;

fetch(characterUrl)
    .then(response => response.json())
    .then(json => insertDetails(json))
    .catch(error => (window.location.href = "error.html"));

function insertDetails(json) {
    const details = json;
    console.dir(details);

    // Insert character info
    const characterImage = document.querySelector(".details-image");
    characterImage.src = details.image;
    characterImage.alt = details.name;

    const characterName = document.querySelector("h1");
    characterName.innerText = details.name;

    const characterStatus = document.querySelector("#status");
    characterStatus.innerText = details.status;

    const characterSpecies = document.querySelector("#species");
    characterSpecies.innerText = details.species;

    const characterOrigin = document.querySelector("#origin");
    characterOrigin.innerText = details.origin.name;

    const characterLocation = document.querySelector("#location");
    characterLocation.innerText = details.location.name;

    // Page title
    document.title = details.name;
}
