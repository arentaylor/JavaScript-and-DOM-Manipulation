// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// key value data inside of the table and add to the table in html (loop)
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select the web user's input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with date that the user inputs
function clickSelect(){
    //don't refresh the page!
    d3.event.preventDefault();

    console.log(dateInputText.property("value"));
    var user_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    displayData(user_table);
}

// event listener to handle change and click
// this may be the issue...data empties
dateInputText.on("change", clickSelect)