/**
 * 
 * @param 
 * @returns {Filters}
 * All Filters logic here
 */


/**
 * Search the tables by the search input
 * @param {*} tableId the table that is being displayed
 * @param {*} inputId where the search parameters are entered
 */
function filterSearchByDescription(tableId, inputId) {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
  
    // Get the input element and its value
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
  
    // Get the table element and its rows
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide/show based on the search query
    for (i = 0; i < tr.length; i++) {
      let visible = false; // Flag to determine if the row should be visible
  
      // Loop through all table cells in the current row
      for (let j = 0; j < tr[i].cells.length; j++) {
        td = tr[i].cells[j];
        if (td) {
          txtValue = td.textContent || td.innerText;
  
          // Check if any cell in the row contains the search query
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            visible = true;
            break; // Break the inner loop if a match is found in any cell
          }
        }
      }
  
      // Show/hide the table row based on the visibility flag
      tr[i].style.display = visible ? "" : "none";
    }
  }

  /**
 * Search the tables by the search input
 * @param {*} tableId the table that is being displayed
 * @param {*} inputId where the search parameters are entered
 * Film Id
 */
    function filterByFilmsID() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
      
        // Get the input element and its value
        input = document.getElementById("spFilmsCounter");
        filter = input.value.toUpperCase();
      
        // Get the table element and its rows
        table = document.getElementById("tblFilms");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide/show based on the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
      
            // Check if the text content matches the search query
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              // Show the table row
              tr[i].style.display = "";
            } else {
              // Hide the table row
              tr[i].style.display = "none";
            }
          }
        }
   }

  /**
 * Search the tables by the search input
 * @param {*} tableId the table that is being displayed
 * @param {*} inputId where the search parameters are entered
 * Actors by First and Last name
 */

function filterActorsByName(){
        // Declare variables
        var inputFirstName, inputLastName, filterFirstName, filterLastName, table, tr, tdFirstName, tdLastName, i;
      
        // Get the input elements and their values
        inputFirstName = document.getElementById("inputFirstName");
        inputLastName = document.getElementById("inputLastName");
        filterFirstName = inputFirstName.value.toUpperCase();
        filterLastName = inputLastName.value.toUpperCase();
      
        // Get the table element and its rows
        table = document.getElementById("tableActors");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide/show based on the search query
        for (i = 0; i < tr.length; i++) {
          // Get the cells in the current row
          tdFirstName = tr[i].getElementsByTagName("td")[1];
          tdLastName = tr[i].getElementsByTagName("td")[2];
      
          if (tdFirstName && tdLastName) {
            // Get the text content of the cells
            txtValueFirstName = tdFirstName.textContent || tdFirstName.innerText;
            txtValueLastName = tdLastName.textContent || tdLastName.innerText;
      
            // Check if both first and last names match the search queries
            if (txtValueFirstName.toUpperCase().indexOf(filterFirstName) > -1 && txtValueLastName.toUpperCase().indexOf(filterLastName) > -1) {
              // Show the table row
              tr[i].style.display = "";
            } else {
              // Hide the table row
              tr[i].style.display = "none";
            }
          }
        }
      }
    
      function filterByLengthAndRating() {
        // Declare variables
        var inputLength, inputRating, filterLength, filterRating, table, tr, tdLength, tdRating, i, txtValue;
      
        // Get the input elements and their values
        inputLength = document.getElementById("inputLength");
        inputRating = document.getElementById("inputRating");
        filterLength = parseFloat(inputLength.value); 
        filterRating = parseFloat(inputRating.value);
      
        // Get the table element and its rows
        table = document.getElementById("tableFilms");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide/show based on the search query
        for (i = 0; i < tr.length; i++) {
          // Get the cells in the current row
          tdLength = tr[i].getElementsByTagName("td")[8]; // Assuming length is in the 9th column
          tdRating = tr[i].getElementsByTagName("td")[10]; // Assuming rating is in the 11th column
      
          if (tdLength && tdRating) {
            // Get the text content of the cells
            txtValueLength = parseFloat(tdLength.textContent || tdLength.innerText); // Convert to float for numerical comparison
            txtValueRating = parseFloat(tdRating.textContent || tdRating.innerText);
      
            // Check if both length and rating meet the specified criteria
            if (txtValueLength >= filterLength && txtValueRating >= filterRating) {
              // Show the table row
              tr[i].style.display = "";
            } else {
              // Hide the table row
              tr[i].style.display = "none";
            }
          }
        }
      }
      
      function filterByLanguageAndCategory() {
        // Declare variables
        var inputLanguage, inputCategory, inputTitle, inputDescription, filterLanguage, filterCategory, filterTitle, filterDescription, table, tr, tdLanguage, tdCategory, tdTitle, tdDescription, i, txtValueLanguage, txtValueCategory, txtValueTitle, txtValueDescription;
      
        // Get the input elements and their values
        inputLanguage = document.getElementById("inputLanguage");
        inputCategory = document.getElementById("inputCategory");
        inputTitle = document.getElementById("inputTitle");
        inputDescription = document.getElementById("inputDescription");
        filterLanguage = inputLanguage.value.toUpperCase();
        filterCategory = inputCategory.value.toUpperCase();
        filterTitle = inputTitle.value.toUpperCase();
        filterDescription = inputDescription.value.toUpperCase();
      
        // Get the table element and its rows
        table = document.getElementById("tableFilms");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide/show based on the search query
        for (i = 0; i < tr.length; i++) {
          // Get the cells in the current row
          tdLanguage = tr[i].getElementsByTagName("td")[2]; // Assuming language is in the 3rd column
          tdCategory = tr[i].getElementsByTagName("td")[13]; // Assuming category is in the 14th column
          tdTitle = tr[i].getElementsByTagName("td")[1]; // Assuming title is in the 2nd column
          tdDescription = tr[i].getElementsByTagName("td")[2]; // Assuming description is in the 3rd column
      
          if (tdLanguage && tdCategory && tdTitle && tdDescription) {
            // Get the text content of the cells
            txtValueLanguage = tdLanguage.textContent || tdLanguage.innerText;
            txtValueCategory = tdCategory.textContent || tdCategory.innerText;
            txtValueTitle = tdTitle.textContent || tdTitle.innerText;
            txtValueDescription = tdDescription.textContent || tdDescription.innerText;
      
            // Check if all criteria are met
            if (
              txtValueLanguage.toUpperCase() === filterLanguage &&
              txtValueCategory.toUpperCase().includes(filterCategory) &&
              txtValueTitle.toUpperCase().includes(filterTitle) &&
              txtValueDescription.toUpperCase().includes(filterDescription)
            ) {
              // Show the table row
              tr[i].style.display = "";
            } else {
              // Hide the table row
              tr[i].style.display = "none";
            }
          }
        }
      }
      
      function filterByCategoryAndRating() {
        // Declare variables
        var inputCategory, inputRating, filterCategory, filterRating, table, tr, tdCategory, tdRating, i, txtValueCategory, txtValueRating;
      
        // Get the input elements and their values
        inputCategory = document.getElementById("inputCategory");
        inputRating = document.getElementById("inputRating");
        filterCategory = inputCategory.value.toUpperCase();
        filterRating = inputRating.value.toUpperCase();
      
        // Get the table element and its rows
        table = document.getElementById("tableFilms");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide/show based on the search query
        for (i = 0; i < tr.length; i++) {
          // Get the cells in the current row
          tdCategory = tr[i].getElementsByTagName("td")[13]; // Assuming category is in the 14th column
          tdRating = tr[i].getElementsByTagName("td")[10]; // Assuming rating is in the 11th column
      
          if (tdCategory && tdRating) {
            // Get the text content of the cells
            txtValueCategory = tdCategory.textContent || tdCategory.innerText;
            txtValueRating = tdRating.textContent || tdRating.innerText;
      
            // Check if both criteria are met
            if (
              txtValueCategory.toUpperCase().includes(filterCategory) &&
              txtValueRating.toUpperCase() === filterRating
            ) {
              // Show the table row
              tr[i].style.display = "";
            } else {
              // Hide the table row
              tr[i].style.display = "none";
            }
          }
        }
      }
      