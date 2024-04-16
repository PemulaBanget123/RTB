let form = document.getElementById("loginform")

let trigger = document.getElementById("forgot")
trigger.addEventListener('click', function() {
    alert("Input your new Password!")
})
form.addEventListener("submit",function(e) {
    e.preventDefault()
    
    let username = document.getElementById("name");
    let password = document.getElementById("password");
    let containDigits = false
    for(let i = 0; i<username.value.length; i++){
        const c = username.value[i];
        if(c >= '0' && c <= '9'){
            containDigits = true;
        }else{
            containDigits = false;
            break;
        }
    }
    if(username.value.length <1){
        alert("Fill with your email or phone number!")
    }
    else if(!username.value.endsWith("@gmail.com") && !containDigits){
        alert("Email must end with @gmail.com!")
    }else if(username.value.length<12 && containDigits){
        alert("Phone number must be 12 digits!")
    }else if(password.value.length<6){
        alert("Password must at least have 6 characters!")
    }
    else{
        alert("Login Successfull!");
        window.location.href = 'Profile.html';
    }
})