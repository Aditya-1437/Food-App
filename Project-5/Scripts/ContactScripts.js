function feedbackForm(){
    var email = document.contactform.email.value;
    var uname = document.contactform.name.value;
    var message = document.contactform.text1.value;

    if(email=="" || email==null){
        alert("Please provide an EMAIL to contact you about your feedback / complaint");
        return false;
    }

    if(uname=="" || uname==null){
        alert("Please provide your name dear customer");
        return false;
    }

    if(message=="" || message==null){
        alert("Please give details about your complaint or feedback");
        return false;
    }
    alert("Your FEEDBACK / COMPLAINT is registered with our company successfully. ThaNkyOu! "+uname);
}