/ Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//We gather all the function into a major function to get it on the document.ready
$(document).ready(function() {

function makeGrid() {

  // We declare all the constants
    const td = $('td');
    const tr = $('tr');
    const grid = $('#pixel_canvas');

    // We declare and link with the DOM elements and all the variable

    let columns = $('#input_width').val();
    let rows = $('#input_height').val();

// It removes the table when a new one is generated.

   grid.children().remove();

// We create the loop in order to create the rows and columns that
// will compose the custom grid
for (let x = 0; x < rows; x++) {
// Here we create the rows for the grid
  grid.append("<tr></tr>");
// Here we create the columns for the grid
  for (let y = 0; y < columns; y++) {
    grid.children().last().append("<td></td>");
    }
  }
//Creates the Event listener on click to pick up the color
grid.on("click", "td",  function () {
  var color = $("input[type='color']").val();

//brings the color to the oncliked grid cell
  $(this).css('background', color);

});
}
//I insert the button eventlistener out of the makeGrid function in order to
//the re-load of the page
$("input[type='submit']").on('click', function(event) {
// We add this Event Delegation method to prevent the site to be re-loaded

makeGrid();
return false;
})

});
