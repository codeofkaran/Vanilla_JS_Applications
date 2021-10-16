var login = document.querySelector("#inputbtn");

var name_value = localStorage.getItem("Username");
var passw = localStorage.getItem("Password");

function fetchCred(){
    
    var userName = document.querySelector("#uName");
    var password = document.querySelector("#pass");
    
    if (userName.value==name_value && password.value==passw) {
        alert("Welcome " + name_value);
        location.replace("login.html");
    }
    else if(userName.value!=name_value || password.value!=passw || userName.value==null || password.value==null){
        alert("Invalid Username or Password");
        location.reload();
    }
}