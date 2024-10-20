function toHome(){
    window.location.href = "./Home.html";
}

//Registration form functionality

function registerConfirm(){
    var usermail = document.registerform.usermail.value;
    var password = document.registerform.userpassword.value;

    if(usermail==null || usermail==""){
        alert("Please provide valid Email Id")
        return false;
    }
    if(password==null || password==""){
        alert("Please provide valid Password")
        return false;
    }
    if(password.length<6){
        alert("Password will be more than 6 characters");
        return false;
    }
    alert("Login success to your account as "+usermail);
}