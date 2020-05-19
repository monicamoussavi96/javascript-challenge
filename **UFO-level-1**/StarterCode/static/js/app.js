// from data.js
 var tableData = data;

 // YOUR CODE HERE!

 // Get a reference to the table body
 var tbody = d3.select("tbody");

 function createTable(data) {
 // clear existing data 
 tbody.html("");

 // Loop Through `data` and append data to the row 
 data.map((ufoTable) => {
 //Then append the row to the table 
   var row = tbody.append("tr");
 //loop through rows and append values to each table cell 
   Object.values(ufoTable).map((values) => {
     let cell = row.append("td");
      cell.text(values);
     }
   );
 });
} 

 function handleClick() {

    // grab the entered datetime value from the filter box 
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //if the date entered falls within the data set, filter the data by the entered datetime and display the entered value 
    if (date) {
        
        filteredData = filteredData.filter(row => row.datetime === date);
  
    }
    // display the new table with the entered date value 
    createTable(filteredData);
   }
  // create an event that allows the table to be displayed when the filter button is clicked 
 d3.selectAll("#filter-btn").on("click", handleClick);

 createTable(tableData);
