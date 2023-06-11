//Need to use the event listener to add the row when the submit button is clicked
//this is not working correctly
document.getElementById('submit').addEventListener('click', addRow);
    
//created a function to add the row to the table
//something is not working correctly
//I can see the table data containers are created, they are just empty 
    function addRow() {
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    
    
    // row.insertCell(0).innerHTML = document.getElementById('title').value;
    // row.insertCell(1).innerHTML = document.getElementById('author').value;
    // row.insertCell(2).innerHTML = document.getElementById('readBy').value;
    // row.insertCell(3).innerHTML = document.getElementById('dateRead').value;
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    
    cell1.innerHTML = document.getElementById('title').value;
    cell2.innerHTML = document.getElementById('author').value;
    cell3.innerHTML = document.getElementById('readBy').value;
    cell4.innerHTML = document.getElementById('dateRead').value;
    
};


addRow();
console.log(table);








