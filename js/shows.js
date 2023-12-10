/**
 * Displays the list of shows from tvmaze
 * @param 
 * @returns 
 * Gets the films from api.tvmaze
 */

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

/**
 * Parse the actors data from database and display
 * @param {*} actors 
 * Fetch the actors from the DB
 */
async function getActors(){
    console.log("Fetching actors...");
    const actors = await fetchData('http://localhost/films-api/actors');
    var tableContent = "";
    actors.forEach(actor => {
        console.log(actor);
        tableContent += `<tr>
        <td>${actor.actor_id}</td>
        <td>${actor.first_name}</td>
        <td>${actor.last_name}</td>
        <td>${actor.last_update}</td>
        </tr>`;
    });
 
 var tableActors = document.getElementById('tableActors');
 tableActors.innerHTML = rows;
 var btnActorsCounter = document.getElementById('btnActorsCounter');
 btnActorsCounter.innerHTML = actors.length;

}







/**
 * Hides all other tables other than the table being onClicked by user
 * @param
 */
function hideTablesExcept(tableId) {
    var tables = document.getElementsByTagName('table');
  
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
  
      if (table.id === tableId) {
        table.style.display = 'table';
      } else {
        table.style.display = 'none';
      }
    }
  }

  window.addEventListener('load', function () {
    hideTablesExcept('');
  });