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
  var myChart;

$(document).ready(function () {
$("button#followShip").click(function(){
    $("div#home2").show(100);
    $("div#shipmentDetails").show(100);
    $("div#map2").show(100); 
    $("div#map").hide(50); 
    $("div#home").hide(50);  
   
    $("#inventoryLabel").text(x.value);
    chartData();
  });

  $("button#cameraShow").click(function(){
    var tempDisplay = document.getElementById("imageContents2");
      if(window.getComputedStyle(tempDisplay).display == "none")
      {
        $("div#imageContents2").show(400);
        $("label#lblsnapshot").hide(); 
      }
      else
      {
        $("div#imageContents2").hide(400);
      }
})

  $("button#inventoryShow").click(function(){
    var tempDisplay = document.getElementById("productContents");
      if(window.getComputedStyle(tempDisplay).display == "none")
      {
        $("div#productContents").show(400);
      }
      else
      {
        $("div#productContents").hide(400);
      }
})

  $("a#back").click(function(){
    $("div#shipmentDetails").hide(100);
    $("div#home2").hide(100); 
    $("div#map2").hide(100); 
    $("div#map").show(100); 
    $("div#home").show(100); 
    markers2[tempkey].setMap(null);
    myChart.destroy();
 
  });
})
function chartData()
{
    // initialize Global variables
    var dataArr = [];
    var compareVal ='';
    var ref = firebase.database().ref("/shipmentsTable/monitoringShipments").orderByChild("cTime");

    // Get data function reads the firebase database. Order the data by Child of key foodAndDrinks
    // It then traverses each value in the firebase and 
    // for each record compares if the current value and previous value are same cuisine increments by 1 
    // until all records of that type are counted. 

    // If the search did not include a search for Restaurant or Cuisine then it ignores that record and resets
    // counter to 1. If the values current and previous values do not match. 
    // We set add the 'label and 'value' into an array and set the previousVal to current value of cuisine.
    function getData() {
        ref.on("child_added", function (snapshot) {
            var obj = snapshot.val();
                if(x.value == obj.aShipmentID)
                {
                    dataArr = ({
                        label: obj.dCelsius,
                        value: obj.cTime,
                    });
          // Verify that values are defined and push data into the chart    
            if(typeof dataArr.label !== 'undefined' && typeof dataArr.value !=='undefined'){
               if(dataArr.label !== compareVal){
                    addData(myChart,dataArr.value , dataArr.label);
                    
               }     
               
            }

            // var unique = $.makeArray($(dataArr).filter(function(i,itm){
            //     return i == $(dataArr).index(itm);
            // })); 
        }
        
        });


    }

    window.chartColors = {
        red: 'rgb(255, 99, 132)',
        orange: 'rgb(255, 159, 64)',
        yellow: 'rgb(255, 205, 86)',
        green: 'rgb(75, 192, 192)',
        blue: 'rgb(54, 162, 235)',
        purple: 'rgb(153, 102, 255)',
        grey: 'rgb(201, 203, 207)'
    };
  // Initialize the Chart Element on HTML 
    var ctx = document.getElementById("myChart").getContext("2d");
    options = {
        scales: {
            xAxes: [{
                barPercentage: 0.5,
                barThickness: 6,
                maxBarThickness: 8,
                minBarLength: 2,
                gridLines: {
                    offsetGridLines: true
                },
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10
                    }
                }]
            }],
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            }
        }
    }
    // Set the configuration of the Chart elements.
    // This is where we pass the data we captured from firebase to the chart label and data
    var config = {
        type: 'line',
        data: {
            labels: dataArr.label,       // value of label retrieved from firebase
            datasets: [{
                label: "Temperature Graph",
                backgroundColor: "rgb(255, 159, 64)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                data: dataArr.value     // value of search for each of the array elements
            }],
            responsive: true,
            options: options

        }
    };

    // Create new chart element context with refrence to the HTML element
    myChart = new Chart(ctx, config);

   
    // Put data into the dataset for the chart and update the chart
    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }
    // Call the function which initiates the chart setup

    getData();
}

