// let image1 = document.getElementById("image1");
let form1 = document.getElementById("guides");
let form2 = document.getElementById("rules");
let footer = document.getElementById("footer");
let toggle = document.getElementById("toggle");
let toggle1 = document.getElementById("toggle1");
form1.classList.add("open-guide");
footer.classList.add("open-footerguide");
function leftClick(){
    btn.style.left ='0'
    form1.classList.add("open-guide");
    footer.classList.add("open-footerguide");
    form2.classList.remove("open-rules");
    footer.classList.remove("open-footerrule");
    // toggle.classList.add("changetoggle");
    toggle.classList.remove("changetoggle");
    toggle1.classList.remove("changetoggle1");
    // image1.style.display ='none';
}
function rightClick(){
    btn.style.left = '110px'
    form1.classList.remove("open-guide");
    footer.classList.remove("open-footerguide");
    form2.classList.add("open-rules");
    footer.classList.add("open-footerrule");
    // toggle.classList.remove("changetoggle");
    toggle.classList.add("changetoggle");
    toggle1.classList.add("changetoggle1");
    // image1.style.display ='none';
}
