
function Validition(){
    var username =document.getElementById('user').value;
    var userpassword =document.getElementById('passwrd').value;
    var userconfirmpwd =document.getElementById('c-passwrd').value;
    var usermbile =document.getElementById('mobilenumber').value;
    var usermail =document.getElementById('emails').value;

//username------
    if(username==""){
        document.getElementById('username').innerHTML ='please fill the field';
        return false;
    }
    if(username.length <= 2 || username.length > 20){
        document.getElementById('username').innerHTML ='Username length must be 2 to 20 characters';
        return false;
    }
    if(!isNaN(username)){
        document.getElementById('username').innerHTML ='Only characters are allowd';
        return false;
    }
//password-------
   if(userpassword==""){
        document.getElementById('password').innerHTML ='please fill the field';
        return false;
    }
    if(userpassword.length <= 5 || userpassword > 20){
        document.getElementById('password').innerHTML ='Password length must be 5 to 20 characters';
        return false;
    }
//confirm-password------
  if(userconfirmpwd != userpassword){
        document.getElementById('c-password').innerHTML ='please confirm password';
        return false;
    }
//mobilenumber--------
  if(usermbile==""){
        document.getElementById('mobileno').innerHTML ='please fill the field';
        return false;
    }
if(isNaN(usermbile)){
    document.getElementById('mobileno').innerHTML ='Only digites are allowd';
    return false;
}
if(usermbile.length != 10){
    document.getElementById('mobileno').innerHTML ='Mobile number must be 10 digites only';
    return false;
}
//Emailid---------
  if(usermail==""){
        document.getElementById('emailids').innerHTML ='please fill the field';
        return false;
    }
   if(usermail.indexOf('@') <= 0 ){
        document.getElementById('emailids').innerHTML ='must include @ ';
        return false;
    }
   if(usermail.charAt(usermail.length-4)!='.' && usermail.charAt(usermail.length-3)!='.'){
        document.getElementById('emailids').innerHTML ='.com Involid position';
        return false;
    }
}


var myButton = document.getElementById('myBtn');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        myButton.style.display = "block";

        if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
            document.getElementById('logo').style.border ="2px solid black"
        }
         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
            document.getElementById('logo').style.border ="2px solid yellow"
        }
        if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
            document.getElementById('logo').style.border ="2px solid red"
        }
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
            document.getElementById('logo').style.border ="2px solid orange"
        }
        if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100){
            document.getElementById('logo').style.border ="2px solid MediumSeaGreen"
        }
    } 
    else{
        myButton.style.display = "none";
        document.getElementById('logo').style.border="none"
    }
}
function topFunction(){
    document.body.scrollTop = 0 ;
    document.documentElement.scrollTop = 0;
}