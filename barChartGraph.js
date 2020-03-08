var myChart;
var myChart2;
function graphData()
{
    $("label#refreshLabelID").hide();
    chartDoorData();
    chartShockData();
}
function chartDoorData()
{
       // initialize Global variables
       var dataArr = [];
       // Get data function reads the firebase database. Order the data by Child of key foodAndDrinks
       // It then traverses each value in the firebase and 
       // for each record compares if the current value and previous value are same cuisine increments by 1 
       // until all records of that type are counted. 
       // If the search did not include a search for Restaurant or Cuisine then it ignores that record and resets
       // counter to 1. If the values current and previous values do not match. 
       // We set add the 'label and 'value' into an array and set the previousVal to current value of cuisine.
       function getData() {
        $('select#shipmentPos > option').each(function() {
            if($(this).val() != "All")
            {
            var num=0;
            var objTemp=""
            var ref = firebase.database().ref("/doorTable/"+$(this).val()+"/");
            ref.on("child_added", function (snapshot) {
                num = num+1;
                var obj = snapshot.val();
                objTemp=obj.shipmentID;
            });
            if(num != 0)
            {
            $('label#refreshLabelID').hide();
            }
           
            dataArr = ({
                label: objTemp,
                value:num,
            });
            addData(myChart,dataArr.value , dataArr.label);  
                    // myChart.data.datasets[0].data[selectItems] = num;
          //  myChart.data.labels[selectItems] =obj.shipmentID; 
          //  myChart.update();
            // Verify that values are defined and push data into the chart    
                // var unique = $.makeArray($(dataArr).filter(function(i,itm){
                //     return i == $(dataArr).index(itm);
                // })); 
            }
        });
       }
    var ctx = document.getElementById("doorChart");
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataArr.label, 
            datasets: [{
                backgroundColor: "red",
                label: 'No. of Occurence',
                data: dataArr.value
            }]
        },
        responsive: true,
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Number of Open Door Occurence per Container'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    function addData(chart, label, data) {
        chart.data.labels.push(data);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(label);
        });
        
        chart.update();

    }
    getData();
  
}

function tempData()
{
 
    var ctx = document.getElementById("shockChart");
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Container 1", "Container 2", "Container 12"],
          
            datasets: [{
                backgroundColor: "red",
                label: 'No. of Occurence',
                data: [12, 19, 1]
            }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Number of Shock Occurence per Container'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
   }

   function chartShockData()
{
       // initialize Global variables
       var dataArr = [];
       var compareVal ='';
       // Get data function reads the firebase database. Order the data by Child of key foodAndDrinks
       // It then traverses each value in the firebase and 
       // for each record compares if the current value and previous value are same cuisine increments by 1 
       // until all records of that type are counted. 
       // If the search did not include a search for Restaurant or Cuisine then it ignores that record and resets
       // counter to 1. If the values current and previous values do not match. 
       // We set add the 'label and 'value' into an array and set the previousVal to current value of cuisine.
       function getData() {
        $('select#shipmentPos > option').each(function() {
            if($(this).val() != "All")
            {
            var num=0;
            var objTemp=""
            var ref = firebase.database().ref("/shockTable/"+$(this).val()+"/");
            ref.on("child_added", function (snapshot) {
                num = num+1;
                var obj = snapshot.val();
                objTemp=obj.shipmentID;
                
            });
            dataArr = ({
                label: objTemp,
                value:num,
            });
                    // myChart.data.datasets[0].data[selectItems] = num;
          //  myChart.data.labels[selectItems] =obj.shipmentID; 
          //  myChart.update();
            // Verify that values are defined and push data into the chart    
            if(typeof dataArr.label !== 'undefined' && typeof dataArr.value !=='undefined'){
                   addData(myChart2,dataArr.value , dataArr.label);  
            }
                // var unique = $.makeArray($(dataArr).filter(function(i,itm){
                //     return i == $(dataArr).index(itm);
                // })); 
             
            }
        });
       }
    var ctx = document.getElementById("shockChart");
    myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataArr.label, 
            datasets: [{
                backgroundColor: "navy",
                label: 'No. of Occurence',
                data: dataArr.value
            }]
        },
        responsive: true,
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Number of Shock Occurence per Container'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    function addData(chart, label, data) {
        chart.data.labels.push(data);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(label);
        });
        
        chart.update();

    }
    getData();
    
}