var employee =firebase.database().ref().child('/accounts/employee/');
var roleType =localStorage.getItem("role");
var idType =localStorage.getItem("id");
function readRoles()
{

    var table7 = document.querySelector('#table7 tbody');
    if(table7.hasChildNodes())
    {
        while(table7.hasChildNodes()) {
            table7.removeChild(table7.firstChild);
        }
     
    }
    employee.once('value', function(snapshot) { 
    snapshot.forEach(function(childSnapshot) {
           if(roleType == "Admin" ||( roleType == "Employee" && idType != childSnapshot.val().id))
           {
           var content = '';
           content +='<tr id='+childSnapshot.val().id+'  >';
           content += '<td>' + String(childSnapshot.val().id)  + '</td>';
           content += '<td>' +  childSnapshot.val().username + '</td>';
           if(childSnapshot.val().track == 1)
           {
            content += '<td>' +' <input type="checkbox"  id=track'+childSnapshot.val().id+' checked>'+ '</td>';
           }
           else
           {
            content += '<td>' +' <input type="checkbox"  id=track'+childSnapshot.val().id+'>'+ '</td>';
 
           }

           if(childSnapshot.val().doorshock == 1)
           {
            content += '<td>' +' <input type="checkbox" id=doorshock'+childSnapshot.val().id+' checked>'+ '</td>';
            }
           else
           {
            content += '<td>' +' <input type="checkbox" id=doorshock'+childSnapshot.val().id+'>'+ '</td>';
 
           }

           if(childSnapshot.val().geo == 1)
           {
            content += '<td>' +' <input type="checkbox" id=geo'+childSnapshot.val().id+' checked >'+ '</td>';
            }
           else
           {
            content += '<td>' +' <input type="checkbox" id=geo'+childSnapshot.val().id+'  >'+ '</td>';
 
           }

           if(childSnapshot.val().notif == 1)
           {
            content += '<td>' +' <input type="checkbox" id=notif'+childSnapshot.val().id+' checked>'+ '</td>';
          }
           else
           {
            content += '<td>' +' <input type="checkbox" id=notif'+childSnapshot.val().id+'>'+ '</td>';
 
           }
           if(childSnapshot.val().roles == 1)
           {
            content += '<td>' +' <input type="checkbox" id=roles'+childSnapshot.val().id+' checked>'+ '</td>';
        }
           else
           {
            content += '<td>' +' <input type="checkbox" id=roles'+childSnapshot.val().id+'>'+ '</td>';
 
           }
           content += '<td>' +' <img src ="check.jpg" id=check'+childSnapshot.val().id+' onclick="rolesCheck(this.id)"style="border-radius: 50%; width: 20%;"> <img src ="delete.jpg" id=delete'+childSnapshot.val().id+' onclick="rolesDelete(this.id)"style="border-radius: 50%; width: 20%;">    '+ '</td>';                  
           content += '</tr>';
           $('#table7 tbody').append(content);
        }
   });
 
});   
 
employee.on("child_changed", function (snapshot) {

    readRoles();

    });
 
}
 
function rolesCheck(clicked_id)
    {


        var id =clicked_id.substring(5,18);
        var employeeUpdate =firebase.database().ref().child('/accounts/employee/"'+String(id)+'"');
        var role1 = $('input#track'+id+'').prop("checked");
        var role2 =$('input#doorshock'+id+'').prop("checked");
        var role3 =$('input#geo'+id+'').prop("checked");
        var role4 =$('input#notif'+id+'').prop("checked");
        var role5 =$('input#roles'+id+'').prop("checked");

       
        if(role1 == true)
        {
            employeeUpdate.update({
                track: 1
            });
        }
        else
        {
            employeeUpdate.update({
                track: 0
            });
        }
        if(role2 == true)
        {
            employeeUpdate.update({
                doorshock: 1
            });
        }
        else
        {
            employeeUpdate.update({
                doorshock: 0
            });
        }
        
        if(role3 == true)
        {
            employeeUpdate.update({
                geo: 1
            });
        }
        else
        {
            employeeUpdate.update({
                geo: 0
            });
        }
        if(role4 == true)
        {
            employeeUpdate.update({
                notif: 1
            });
        }
        else
        {
            employeeUpdate.update({
                notif: 0
            });
        }
        if(role5 == true)
        {
            employeeUpdate.update({
                roles: 1
            });
        }
        else
        {
            employeeUpdate.update({
                roles: 0
            });
        }
        alert("Update Role Done");
 
        readRoles();
    }
    function rolesDelete(clicked_id)
    {


     var id =clicked_id.substring(6,19);
 
     var employeeDelete =firebase.database().ref('/accounts/employee/"'+String(id)+'"');
     $('table#table7 tr#'+id+'').remove();
          alert("Employee Deleted");
      
          employeeDelete.remove();
      
    }
function addEmp()
{
 
    var d = new Date();
    var n = d.getTime();
    var idemp = n;
    if( $("#addempText").val()!="")
    {
        firebase.database().ref('/accounts/employee/"'+String(idemp)+'"').set({
            username:  $("#addempText").val(),
            id: String(idemp),
            doorshock: 0,
            geo:0,
            notif:0,
            track:0,
            roles:0,
            password : "1111"
        });
        alert("Register Done.");
        $("input:text").val("");
        readRoles();
    }
    else
    {
        alert("Please input employee name");
    }

}
 
