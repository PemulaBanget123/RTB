let form = document.getElementById("report-form");

let trigger = document.getElementById("deleteicon");
let trigger2 = document.getElementById("deleteicon2");
let trigger3 = document.getElementById("deleteicon3");
let trigger4 = document.getElementById("deleteicon4");

let name = document.getElementById("name");
let kelas = document.getElementById('kelas');
let lokasi = document.getElementById("lokasi");
let fasilitas = document.getElementById("fasilitas");
let keluhan = document.getElementById("keluhan");
let middle = document.getElementbyId("middle");

trigger.addEventListener('click', function() {
    name.value = ''; // Clear the input field
});
trigger2.addEventListener('click', function() {
    lokasi.value = ''; // Clear the input field
});
trigger3.addEventListener('click', function() {
    lokasi.value = ''; // Clear the input field
});
trigger4.addEventListener('click', function() {
    keluhan.value = ''; // Clear the input field
});

form.addEventListener("submit",function(e){
    e.preventDefault()

    if(name.value.length <1){
        alert("Name must be inputed!")
    }else if(kelas.value=="" || kelas.value==undefined){
        alert("Class must be chosen!")
    }else if(lokasi.value.length<1){
        alert("Location must be inputed!")
    }else if(fasilitas.value.length<1){
        alert("Damaged Facility must be inputed!")
    }else if(keluhan.value.length<1){
        alert("Complaint must be inputed!")
    }
    else{
        let container = document.getElementById("container")
        let popup = document.getElementById("popup")
        let gambar = document.getElementById("gambar")

        container.style.filter = "blur(10px)";
        gambar.style.filter ="blur(10px)";
        middle.style.filter = "blur(10px);

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
