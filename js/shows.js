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
 * The actors data from database and display
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
 tableActors.innerHTML = tableContent;
 var btnActorsCounter = document.getElementById('btnActorsCounter');
 btnActorsCounter.innerHTML = actors.length;

}

/**
 * 
 * @param {*} films 
 * Fetch the films from the DB
 */

async function getFilms(){
    console.log("Fetching films...")
    const films = await fetchData('http://localhost/films-api/films');
    /*Field for each film to display the table */
    var tableContent= "";
    films.forEach(film => {
        console.log(film);
        tableContent += `<tr> 
        <td>${film.film_id}</td>
        <td>${film.title}</td>
        <td>${film.description}</td>
        <td>${film.release_year}</td>
        <td>${film.language_id}</td>
        <td>${film.orginal_language_id}</td>
        <td>${film.rental_duration}</td>
        <td>${film.rental_rate}</td>
        <td>${film.length}</td>
        <td>${film.replacement_cost}</td>
        <td>${film.rating}</td>
        <td>${film.special_features}</td>
        <td>${film.last_update}</td>
        </tr>`;
    });

    var tableFilms = document.getElementById('tableFilms');
    tableFilms.innerHTML = tableContent;
    var btnFilmsCounter = document.getElementById('btnFilmsCounter');
    btnFilmsCounter.innerHTML = films.length;

}

/**
 * 
 * @param {*} filmsByID
 * Fetch the films from the DB and filter by Films ID
 */

async function getFilmsById(){
    console.log("Fetching films by ID...")
    const film_id = await fetchData('http://localhost/films-api/films/{film_id}');

    console.log(film_id.data);

}

/**
 * 
 * @param {*} categories{category_id}films
 * Fetching catagories that belong to specific film
 */


async function getFilmsByCategories(){
    console.log("Fetching films by Catagories...")
    const categories = await fetchData('http://localhost/films-api/categories/{category_id}/films');
    /*Field for each film to display the table */
    var tableContent= "";
    categories.forEach(category => {
        console.log(category);
        tableContent += `<tr> 
        <td>${category.film_id}</td>
        <td>${category.category_id}</td>
        <td>${category.title}</td>
        <td>${category.description}</td>
        <td>${category.release_year}</td>
        <td>${category.language_id}</td>
        <td>${category.orginal_language_id}</td>
        <td>${category.rental_duration}</td>
        <td>${category.rental_rate}</td>
        <td>${category.length}</td>
        <td>${category.replacement_cost}</td>
        <td>${category.rating}</td>
        <td>${category.special_features.join(', ')}</td>
        <td>${category.last_update}</td>
        <td>${category.actors}</td>
        </tr>`;
    });

    var tableCategories = document.getElementById('tableCategories');
    tableCategories.innerHTML = tableContent;
    var btnCategoriesCounter = document.getElementById('btnCategoriesCounter');
    btnCategoriesCounter.innerHTML = categories.length;
  }


  
  /**
 * 
 * @param {*} actors{actor_id}films
 * Fetching actors that belong to specific film
 */
 async function getActorsIdByFilms(){
    console.log("Fetching actors by films...")
    const actors= await fetchData('http://localhost/films-api/actors/{actor_id}/films');
   
    var tableContent= "";
    actors.forEach(actor => {
        console.log(actor);
        tableContent += `<tr> 
        <td>${actor.film_id}</td>
        <td>${actor.title}</td>
        <td>${actor.description}</td>
        <td>${actor.release_year}</td>
        <td>${actor.language_id}</td>
        <td>${actor.orginal_language_id}</td>
        <td>${actor.rental_duration}</td>
        <td>${actor.rental_rate}</td>
        <td>${actor.length}</td>
        <td>${actor.replacement_cost}</td>
        <td>${actor.rating}</td>
        <td>${actor.special_features.join(', ')}</td>
        <td>${actor.last_update}</td>
        <td>${actor.category_name}</td>
        </tr>`;
    });

    var tableActorsByFilm = document.getElementById('tableActorsByFilm');
    tableActorsByFilm.innerHTML = rows;
    var btnActorsByFilmCounter = document.getElementById('btnActorsByFilmCounter');
    btnActorsByFilmCounter.innerHTML = actors.length;
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