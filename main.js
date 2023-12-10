function validateAndSend() {
    
    var email = document.getElementById('email');
    var message = document.getElementById('message');

//    Could have an email of a@a.com - so 7 characters minimum
    if(email.indexOf("@" == -1 || email.length < 7))   
    {
        errors.push("Please Enter a Valid Email")
    }
    
    else
    {
        
        return true;
    }

}



