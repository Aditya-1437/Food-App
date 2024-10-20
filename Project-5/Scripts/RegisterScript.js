function toHome(){
    window.location.href = "./Home.html";
}

//Registration form functionality

function registerConfirm(){
    var username = document.registerform.username.value;
    var usermail = document.registerform.usermail.value;
    var password = document.registerform.userpassword.value;
    var ConfirmPassword = document.registerform.confirmpassword.value;
    var ckeckbox = document.registerform.check.checked;

    if(username==null || username==""){
        alert("Please provide valid Fullname")
        return false;
    }
    if(usermail==null || usermail==""){
        alert("Please provide valid Email Id")
        return false;
    }
    if(password==null || password==""){
        alert("Please provide valid Password")
        return false;
    }
    if(password.length<6){
        alert("Password must be more than 6 characters");
        return false
    }
    if(ConfirmPassword==null || ConfirmPassword==""){
        alert("Please provide valid Conformation Password")
        return false;
    }
    if(password != ConfirmPassword){
        alert("Password do not match with ConfirmPassword. Check again...");
        return false;
    }
    if(ckeckbox != true){
        alert("Accept the terms and conditions");
        return false;
    }

}