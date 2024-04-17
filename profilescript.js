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
document.addEventListener('DOMContentLoaded', function() {
    const guidesButton = document.getElementById('guidesButton');

    if (guidesButton) {
        guidesButton.addEventListener('click', function() {
            window.location.href = 'News.html';
        });
    }
});

function deletepop(){
    let viewlist = document.getElementById("ViewList");
    let title1 = document.getElementById("title1");
    let popup4 = document.getElementById("popup4");
    let isiprofile = document.getElementById("isiprofile");
    bg.style.filter = "blur(10px)";
    title1.style.filter = "blur(10px)";
    isiprofile.style.filter = "blur(10px)";
    thirdbutton.style.filter = "blur(0)";
    viewlist.style.filter = "blur(10px)";
    popup4.classList.add("open-popup4");
    let noclick = document.getElementById("no")
    let yesclick = document.getElementById("yes")
    popup3.classList.remove("open-popup3");
    popup2.classList.remove("open-popup2");
    popup1.classList.remove("open-popup1");


    noclick.addEventListener('click', function(){
        popup4.classList.remove("open-popup4");
        viewlist.style.filter = "blur(0)";
        title1.style.filter = "blur(0)";
        isiprofile.style.filter = "blur(0)";
        bg.style.filter = "blur(0)";
    });
    
    let popup5 = document.getElementById("popup5");

    yesclick.addEventListener('click',function(){
        popup4.classList.remove("open-popup4");
        popup5.classList.add("open-popup5");
        let okay = document.getElementById("ok");
        okay.addEventListener('click',function(){
            viewlist.style.filter = "blur(0)";
            bg.style.filter = "blur(0)";
            isiprofile.style.filter = "blur(0)";
            title1.style.filter = "blur(0)";
            popup5.classList.remove("open-popup5");
        });
    });
}
