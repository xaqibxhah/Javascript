let emailinput = document.getElementById("emailinput")
let passwordinput = document.getElementById("passwordinput")

let emaildata ="syedsaqibshah112500s@gmail.com"
let passworddata ="12345"


function getInputValue(){
    console.log("email" + emailinput.value);
    console.log("password" + passwordinput.value);


    if(emaildata == emailinput.value && passworddata == passwordinput.value){
        console.log("user =======> login");
    }else{
        console.log("invalid Credentail");
    }


    emailinput.value =""
    passwordinput.value =""
    
}