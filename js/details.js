const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "/";
}

const baseUrl = "https://rickandmortyapi.com/api/character/";
const characterUrl = `${baseUrl}${id}
