const baseUrl = "https://rickandmortyapi.com/api/character/";

fetch(baseUrl)
    .then(response => response.json())
    .then(json => createCard(json))
    .catch(error => (window.location.href = "error.html"));

function createCard(json) {
    const results = json.results;
    console.dir(results);
    const resultsContainer = document.querySelector(".row.results");

    let cardHtml = "";

    results.forEach(result => {
        let imageUrl = "https://via.placeholder.com/300";
        if (result.image) {
            imageUrl = result.image;
        }
        let name = result.name;
        let type = "Unknown";
        // Every value that isn't falsy
        if (result.type) {
            type = result.type;
        }
        let episodeCount = result.episode.length;

        let characterId = result.id;

        cardHtml += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                        <img class="image" src="${imageUrl}" alt="${name}">
                        <div class="details">
                            <h4 class="name">${name}</h4>
                            <p>Type: ${type}</p>    
                            <p>Episode count: ${episodeCount}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${characterId}">Details</a>
                        </div>
                    </div>
                </div>`;
    });

    resultsContainer.innerHTML = cardHtml;
}

// Seperate function for default values?
