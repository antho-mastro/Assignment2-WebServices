async function fetchData(uri){
    //Implement HTTP client
    const request = new Request(uri, {
        "method": "GET"
    });
    const response = await fetch(uri, request);
    if(response.ok && response.status === 200){
        const data = await response.json();
        return data;
    }
}

//Fetching shows from tvmaze
async function fetchShows(){
    console.log("Fetching shows...");
    const shows = await fetchData("https://api.tvmaze.com/shows");
    var tableContent = "";
    shows.forEach(show => {
        console.log(show);
        tableContent += `<tr>
        <td>${show.id}</td>
        <td>${show.name}</td>
        <td>${show.language}</td>
        <td>${show.genres.join(",")}</td>
        <td>${show.premiered}</td>
        <td>${show.rating.average}</td>
        <td>${show.summary}</td>
        <td>${show.type}</td>
        <td><img src="${show.image.medium}"</td>
        </tr>`;
    });

    var tbiShows = document.getElementById("tbiShows");
    tbiShows.innerHTML = tableContent;
    var btnShowsCounter = document.getElementById("btnShowsCounter");
    btnShowsCounter.innerHTML = shows.length;
}