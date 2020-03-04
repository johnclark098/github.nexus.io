function readNotif()
{
    var notif =  firebase.database().ref().child('/notifications');
    notif.on('value', function(snapshot) {
        $("div#notifID").html("");
        snapshot.forEach(function(childSnapshot) {
          var content = ''; 
           content +='<div id=' + String(childSnapshot.key) + ' class="notifContent" onclick="deleteNotif(this.id)">';
    
          if(String(childSnapshot.val().text.substr(0,5)).trim() == "Shock")
          {
            content +='<img src="shock.jpg" class="notifImage">';
          }
          else if(String(childSnapshot.val().text.substr(0,5)).trim() == "Door")
          {
            content +='<img src="door.jpg" class="notifImage">';
          }
          else
          { 
            content +='<img  src="location.jpg" class="notifImage">';
          }
          
          content += '<label class="labelClass">' + String(childSnapshot.val().text) + '</label>'; 
          content += '</div>'; 
        $('#notifID').append(content);
        });
    }); 
 
        
}
function deleteNotif(clicked_id)
{
    let deleteRef = firebase.database().ref('/notifications/'+clicked_id+'');
    deleteRef.remove()
    document.getElementById(clicked_id).remove();
}