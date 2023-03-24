function checkValidation(){
    
    let username=document.getElementById("username-val").value;
    let email=document.getElementById("email-val").value;
    let password=document.getElementById("password-val").value;
    let con_pass=document.getElementById("confirm-pass-val").value;
    let status=false;
    let mailformat = /[@]/;

    if(username.length<1){
        document.getElementById("username-chk").innerHTML="Username cannot be blank"
        document.getElementById("username-chk").style.color="red"
        document.getElementById("username-val").style.border="2px solid red"
        status=false;
    }else{
        document.getElementById("username-chk").innerHTML=""
        document.getElementById("username-val").style.border="2px solid green"
        status=true;
    }

    if(email.length<1){
        document.getElementById("email-chk").innerHTML="Email cannot be blank"
        document.getElementById("email-chk").style.color="red"
        document.getElementById("email-val").style.border="2px solid red"
        status=false;
    }else{
        if(mailformat.test(email)){
            document.getElementById("email-chk").innerHTML=""
            document.getElementById("email-val").style.border="2px solid green"
            status=true;
        }else{
            document.getElementById("email-chk").innerHTML="Invalid Email"
            document.getElementById("email-chk").style.color="red"
            status=false;
        }
    }

    if(password.length<1){
        document.getElementById("password-chk").innerHTML="Password cannot be blank"
        document.getElementById("password-chk").style.color="red"
        document.getElementById("password-val").style.border="2px solid red"
        status=false;
    }else{
        document.getElementById("password-val").style.border="2px solid green"
        status=true;
    }

    if(con_pass.length<1){
        document.getElementById("confirm-chk").innerHTML="Please Retype the Password"
        document.getElementById("confirm-chk").style.color="red"
        document.getElementById("confirm-pass-val").style.border="2px solid red"
        status=false;
    }else{
        if(con_pass==password){
            status=true;
        }else{
            document.getElementById("confirm-pass-val").style.border="2px solid green"
            document.getElementById("confirm-chk").innerHTML="Password did not match"
            document.getElementById("confirm-chk").style.color="red"
            status=false;
        }
    }
    
    return status;
}