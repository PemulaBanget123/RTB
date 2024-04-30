let trigger = document.getElementById("deleteicon");
let form = document.getElementById("bookingform")
let name = document.getElementById("name");
let kelas = document.getElementById("kelas");
let fasilitas = document.getElementById("Fasilitas");
let dmy = document.getElementById("dmy");
let waktu = document.getElementById("waktu");
let middle = document.getElementById("middle");

trigger.addEventListener('click', function() {
    name.value = ''; // Clear the input field
});


form.addEventListener("submit",function(e){
    e.preventDefault()

    if(name.value.length <1){
        alert("Name must be inputed!")
    }else if(kelas.value=="" || kelas.value==undefined){
        alert("Class must be chosen!")
    }else if(fasilitas.value=="" || fasilitas.value==undefined){
        alert("Facility must be chosen!")
    }else if(dmy.value=="" || dmy.value==undefined){
        alert("Choose date of Booking!")
    }else if(waktu.value=="" || waktu.value==undefined){
        alert("Time must be chosen!")
    }
    else{
        let container = document.getElementById("container")
        let popup = document.getElementById("popup")
        let gambar = document.getElementById("carousel")

        middle.style.filter = "blur(10px)";
        container.style.filter = "blur(10px)";
        gambar.style.filter ="blur(10px)";

        value3.innerText = fasilitas.value;
        
        popup.classList.add("open-popup");
        let noclick = document.getElementById("no")
        let yesclick = document.getElementById("yes")

        noclick.addEventListener('click', function(){
            container.style.filter = "blur(0)";
            gambar.style.filter = "blur(0)";
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
