let popup1 = document.getElementById("popup1");
let bg = document.getElementById("profileimg");
let thirdbutton = document.getElementById("3rdbutton")
function openPopup(){
    bg.style.filter = "blur(10px)";
    thirdbutton.style.filter = "blur(10px)";
    popup1.classList.add("open-popup1");
}
function closePopup(){
    bg.style.filter = "blur(0)";
    thirdbutton.style.filter = "blur(0)";
    popup1.classList.remove("open-popup1");
}
let popup2 = document.getElementById("popup2");
function openPopup1(){
    bg.style.filter = "blur(10px)";
    thirdbutton.style.filter = "blur(10px)";
    popup2.classList.add("open-popup2");
}
function closePopup1(){
    bg.style.filter = "blur(0)";
    thirdbutton.style.filter = "blur(0)";
    popup2.classList.remove("open-popup2");
}
let popup3 = document.getElementById("popup3");
function openPopup3(){
    bg.style.filter = "blur(10px)";
    thirdbutton.style.filter = "blur(10px)";
    popup3.classList.add("open-popup3");
}
function closePopup3(){
    bg.style.filter = "blur(0)";
    thirdbutton.style.filter = "blur(0)";
    popup3.classList.remove("open-popup3");
}