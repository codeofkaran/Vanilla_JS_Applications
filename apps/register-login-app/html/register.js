var userName  = document.querySelector("#username");
var firstName = document.querySelector("#fName");
var lastName  = document.querySelector("#lName");
var password  = document.querySelector("#pass");
var emailId   = document.querySelector("#email");
var submitBtn = document.querySelector("#fetchBtn");

var regex1 = /^[a-zA-Z_-]{2,12}$/;
var regex2 = /^[A-z][a-z]{2,10}$/;
var regex3 = /^[A-z][a-z]{2,14}$/;
var regex4 = /^[a-zA-Z0-9\._\-@!#$%^&*\s]{8,20}/;
var regex5 = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

function storeInfo()
{
    var name    = userName.value;
    var fname   = firstName.value;
    var lname   = lastName.value;
    var passwd  = password.value;
    var emailid = emailId.value;
    
    if(regex1.test(name)){
        localStorage.setItem("Username",name);
        name = true;
    }
    else{
        alert("Invalid username. Enter details again");
        name = false;
        exit();
    }
    if(regex2.test(fname)){
        localStorage.setItem("First Name",fname)
        fname = true;
    }
    else{
        alert("Invalid first name. Enter details again");
        fname = false;
        location.reload();
        exit();
    }
    if(regex3.test(lname)){
        localStorage.setItem("Last Name",lname)
        lname = true;
    }
    else{
        alert("Invalid last name. Enter details again");
        lname = false;
        location.reload();
        exit();
    }
    
    if(regex4.test(passwd)){
            localStorage.setItem("Password",passwd)
            passwd = true;
    }
    else{
        alert("Invalid Password. Password must be atleast 8 characters");
        passw = false;
        location.reload();
        exit();
    }
            
    if(regex5.test(emailid)){
        localStorage.setItem("Email Id",emailid);
        emailid = true;
    }
    else{
        alert("Invalid email. Enter details again");
        emailid = false;
        location.reload();
        exit();
    }  
    if(name && fname && lname && passwd && emailid){
        alert("User Registered");
    }      
}