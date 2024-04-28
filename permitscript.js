var btn = document.getElementById('btn');
let form = document.getElementById("permitform");
let image1 = document.getElementById("image1");
let toggle = document.getElementById("toggle");
let toggle1 = document.getElementById("toggle1");
let middle = document.getElementById("middle");
function leftClick(){
    btn.style.left ='0'
    form.classList.add("open-form");
    toggle.classList.add("changetoggle");
    toggle1.classList.remove("changetoggle1");
    image1.style.display ='none';
}
function rightClick(){
    btn.style.left = '110px'
    form.classList.add("open-form");
    toggle.classList.remove("changetoggle");
    toggle1.classList.add("changetoggle1");
    image1.style.display ='none';
}

let trigger = document.getElementById("deleteicon");
let username = document.getElementById("name");
trigger.addEventListener('click', function() {
    username.value = ''; // Clear the input field
});

let trigger2 = document.getElementById("deleteicon1");
let reason = document.getElementById("reason");
trigger2.addEventListener('click', function() {
    reason.value = ''; // Clear the input field
});

form.addEventListener("submit",function(e){
    e.preventDefault()
    if(username.value.length <1){
        alert("Name must be inputed!");
    }else if(kelas.value=="" || kelas.value==undefined){
        alert("Class must be chosen!");
    }else if(reason.value.length<1){
        alert("Reason must be filled!");
    }
    else{
        let popup = document.getElementById("popup")
        let container = document.getElementById("container2")
        container.style.filter = "blur(10px)";
        middle.style.filter = "blur(10px)";

        popup.classList.add("open-popup");
        let noclick = document.getElementById("no")
        let yesclick = document.getElementById("yes")

        noclick.addEventListener('click', function(){
            container.style.filter = "blur(0)";
            middle.style.filter = "blur(0)";
            popup.classList.remove("open-popup");
        });
        
        let popup2 = document.getElementById("popup2");

        yesclick.addEventListener('click',function(){
            popup.classList.remove("open-popup");
            popup2.classList.add("open-popup2");
            let okay = document.getElementById("ok");
            okay.addEventListener('click',function(){
                window.location.href = 'Profile.html';
            });
        });
    }
})
