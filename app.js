 
  var firebaseConfig = {
    apiKey: "AIzaSyAUGHZrYdzCHwEPFWjo3FqjZEr9ZR0a9ow",
    authDomain: "temporarydb-6928e.firebaseapp.com",
    databaseURL: "https://temporarydb-6928e.firebaseio.com",
    projectId: "temporarydb-6928e",
    storageBucket: "temporarydb-6928e.appspot.com",
    messagingSenderId: "623044431745",
    appId: "1:623044431745:web:6b19caf3aa23ff8ed8a280",
    measurementId: "G-XQSTFCN9XV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
 
  var storage = firebase.storage();
/*
var xx = document.getElementById("shipmentPos"); 
//for home shipments Table
  var table = document.querySelector('#table1 tbody');
  const shipmentsTable = firebase.database().ref('/shipmentsTable/monitoringShipments');
  shipmentsTable.on('value', snap => {
    while(table.hasChildNodes()) {
	table.removeChild(table.firstChild);
    }
    var students = snap.val();

    for(var i in students) {
      var row = table.insertRow(-1);
      for(var j in students[i]) {
	cell = row.insertCell(-1);
	cell.innerHTML = students[i][j];
      }
    }
 
  });
  shipmentsTable .on('child_changed',snap =>{
const liChanged=document.getElementById(snap.key);
liChanged.innerText=snap.val();
});
shipmentsTable .on('child_removed',snap =>{
const liToRemove=document.getElementById(snap.key);
liToRemove.remove();
});


  //for home product Table
  var table2 = document.querySelector('#table2 tbody');
  const productTable = firebase.database().ref('/shipmentsProducts');
  productTable.on('value', snap => {

    while(table2.hasChildNodes()) {
      table2.removeChild(table2.firstChild);
    }
    var students = snap.val();

    for(var i in students) {
      var row = table2.insertRow(-1);
      for(var j in students[i]) {
	cell = row.insertCell(-1);
	cell.innerHTML = students[i][j];
      }
    }
 
  });

  
  productTable .on('child_changed',snap =>{
  const liChanged=document.getElementById(snap.key);
  liChanged.innerText=snap.val();

});
productTable .on('child_removed',snap =>{
const liToRemove=document.getElementById(snap.key);
liToRemove.remove();
});



 //for  shipments Table

*/
 

function filterTable1() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table1");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function filterTable2() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("table2");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function filterTable3() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput3");
  filter = input.value.toUpperCase();
  table = document.getElementById("table3");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
 
function filterTable4() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput4");
  filter = input.value.toUpperCase();
  table = document.getElementById("table4");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function filterTable5() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput5");
  filter = input.value.toUpperCase();
  table = document.getElementById("table5");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function filterTable6() {
  let table, filter, input, tr, td, i;
  input = document.getElementById("myInput6");
  filter = input.value.toUpperCase();
  table = document.getElementById("table6");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    if (tr[i].textContent.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table1");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}

function sortTable2(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table2");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}


function sortTable3(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table3");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}


function sortTable4(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table4");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}

function sortTable5(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table6");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}

function sortTable6(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table6");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
  //start by saying: no switching is done:
  switching = false;
  rows = table.rows;
  /*Loop through all table rows (except the
  first, which contains table headers):*/
  for (i = 1; i < (rows.length - 1); i++) {
    //start by saying there should be no switching:
    shouldSwitch = false;
    /*Get the two elements you want to compare,
    one from current row and one from the next:*/
    x = rows[i].getElementsByTagName("TD")[n];
    y = rows[i + 1].getElementsByTagName("TD")[n];
    /*check if the two rows should switch place,
    based on the direction, asc or desc:*/
    if (dir == "asc") {
    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch= true;
      break;
    }
    } else if (dir == "desc") {
    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
      //if so, mark as a switch and break the loop:
      shouldSwitch = true;
      break;
    }
    }
  }
  if (shouldSwitch) {
    /*If a switch has been marked, make the switch
    and mark that a switch has been done:*/
    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    switching = true;
    //Each time a switch is done, increase this count by 1:
    switchcount ++;      
  } else {
    /*If no switching has been done AND the direction is "asc",
    set the direction to "desc" and run the while loop again.*/
    if (switchcount == 0 && dir == "asc") {
    dir = "desc";
    switching = true;
    }
  }
  }
}