$(document).ready(function(){

    //image 1 button
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
        var adminDb = firebase.database().ref('/accounts/admin');
        var codeDb = firebase.database().ref('/accounts/codeID');
        var userDb = firebase.database().ref('/accounts/employee');
    $("img#img1").click(function(){
        $("label#lblNotify").hide();
        $("img#img2").removeClass("imageadd2");
        $("img#img2").addClass("imageremove2");
        $("img#img1").removeClass("imageremove1");
        $("img#img1").addClass("imageadd1");
        $("input:text").val("");
        $("label#lblNotify").text("");  
        $("input:password").val("");
        if($("#togBtn").attr("value") == "on")
        {
            $("div#signupAdminID").hide();
            $("div#signinAdminID").show();
            $("div#signupEmpID").hide();
            $("div#signinEmpID").hide();
             
        }
        else
        {
            $("div#signupAdminID").show();
            $("div#signinAdminID").hide();
 
            $("div#signupEmpID").hide();
            $("div#signinEmpID").hide();
        }
      
    });  
     //image 2 button   
    $("img#img2").click(function(){
        $("label#lblNotify").hide();
        $("img#img1").removeClass("imageadd1");
        $("img#img1").addClass("imageremove1");
        $("img#img2").removeClass("imageremove2");
        $("img#img2").addClass("imageadd2");
        $("input:text").val("");
        $("input:password").val("");
        $("label#lblNotify").text("");  
        if($("#togBtn").attr("value") == "on")
        {
          
            $("div#signupAdminID").hide();
            $("div#signinAdminID").hide();
            $("div#signupEmpID").hide();
            $("div#signinEmpID").show();
        }

        else
        {
            $("div#signupAdminID").hide();
            $("div#signinAdminID").hide();
            $("div#signupEmpID").show();
            $("div#signinEmpID").hide();
        }
    });    
    //toggle button
    $('#togBtn').click(function() {
        $("input:text").val("");
        $("input:password").val(""); 
        $("label#lblNotify").text(""); 

        if ($(this).val() == "on") {
           $(this).val("off");
         
            if($("img#img1").attr("class")== "imageadd1")
            {
                $("div#signinAdminID").hide(); 
                $("div#signinEmpID").hide(); 
                $("div#signupAdminID").show(); 
                $("div#signupEmpID").hide(); 
            }
            else
            {
                $("div#signinAdminID").hide(); 
                $("div#signinEmpID").hide(); 
                $("div#signupAdminID").hide(); 
                $("div#signupEmpID").show(); 
            }
        }
        else {
           $(this).val("on");
           
           if($("img#img1").attr("class")== "imageadd1")
            {
                $("div#signinAdminID").show(); 
                $("div#signinEmpID").hide(); 
                $("div#signupAdminID").hide(); 
                $("div#signupEmpID").hide();    
            }
            else
            {
                $("div#signinAdminID").hide(); 
                $("div#signinEmpID").show(); 
                $("div#signupAdminID").hide(); 
                $("div#signupEmpID").hide(); 
            }
   
        }
     });
     

     $("button#admInBtn").click(function(){
            var temp = 0;
            var str1 = $("#userinAdmin").val();
            var str2 = $("#passinAdmin").val();          
            adminDb.on('value', function(snapshot){
                if(snapshot.exists()){
                     snapshot.forEach(function(data){
                        if(str1==data.val().username && str2==data.val().password)
                        {
                            localStorage.setItem("username",data.val().username);
                            localStorage.setItem("role","Admin");
                            window.location.href="https://johnclark098.github.io/sampleweb.github.io/realtimetracking"; 
                            temp=1;
                        }
                        else if(str1 =="" || str2=="")
                        {
                            $("label#lblNotify").show();
                            $("label#lblNotify").text("Please complete all fields");                    
                        }
                       
                    });
                    if(temp==0)
                    {
                        $("label#lblNotify").show();
                        $("label#lblNotify").text("Account not found");  
                    }
                }
            });
    });    

    $("button#admUpBtn").click(function(){
        var d = new Date();
        var n = d.getTime();
        var str1 = $("#userupAdmin").val();
        var str2 = $("#passupAdmin").val();    
        var str3 = $("#codeupAdmin").val();  
        var temp = 0;   
        codeDb.once('value', function(snapshot){
                if(snapshot.exists()){
                    snapshot.forEach(function(data){
                         if(str1 =="" || str2==""|| str3=="")
                        {
                            $("label#lblNotify").show();
                            $("label#lblNotify").text("Please complete all fields");   
                            temp=1;                       
                        }
                        else 
                        {
                            if(data.val() == str3 )
                                {
                                    firebase.database().ref('/accounts/admin/"'+String(n)+'"').set({
                                        username: str1,
                                        id: String(n),
                                        password : str2
                                    });
                                    alert("Register Done.");
                                    $("input:text").val("");
                                    $("input:password").val(""); 
                                    temp=1;
                                }
                        }
                    });
                    if(temp==0)
                    {
                        $("label#lblNotify").show();
                        $("label#lblNotify").text("Code does not exist");  
                    }
                }
            });
    });

    $("button#empInBtn").click(function(){
        var temp = 0;
        var str1 = $("#userinEmp").val();
        var str2 = $("#passinEmp").val();          
        userDb.on('value', function(snapshot){
            if(snapshot.exists()){
                 snapshot.forEach(function(data){
                    if(str1==data.val().username && str2==data.val().password)
                    {
                        localStorage.setItem("username",data.val().username);
                        localStorage.setItem("role","Employee");
                        window.location.href="file:///D:/Yuro/Tracker/sampleweb.github.io-master/realtimetracking.html#"; 
                        temp=1;
                    }
                    else if(str1 =="" || str2=="")
                    {
                        $("label#lblNotify").show();
                        $("label#lblNotify").text("Please complete all fields");                    
                    }
                   
                });
                if(temp==0)
                {
                    $("label#lblNotify").show();
                    $("label#lblNotify").text("Account not found");  
                }
            }
        });
});    

$("button#empUpBtn").click(function(){
    var d = new Date();
    var n = d.getTime();
    var str1 = $("#userupEmp").val();
    var str2 = $("#passupEmp").val();    
    var str3 = $("#codeupEmp").val();  
    var temp = 0;
    codeDb.once('value', function(snapshot){
            if(snapshot.exists()){
                snapshot.forEach(function(data){
                     if(str1 =="" || str2==""|| str3=="")
                    {
                        $("label#lblNotify").show();
                        $("label#lblNotify").text("Please complete all fields");     
                        temp=1;                
                    }
                    else 
                    {
                        if(data.val() == str3 )
                            {
                                firebase.database().ref('/accounts/employee/"'+String(n)+'"').set({
                                    username: str1,
                                    id: String(n),
                                    password : str2
                                });
                                alert("Register Done.");
                                $("input:text").val("");
                                $("input:password").val(""); 
                                 temp=1;
                            }
                 
                    }
                });
                if(temp==0)
                {
                    $("label#lblNotify").show();
                    $("label#lblNotify").text("Code does not exist");  
                }
            }
        });
});
    $("input").focus(function(){
        $("label#lblNotify").hide();
      });
});
