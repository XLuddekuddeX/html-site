function visaDialog(){
    alert("hej världen");
}

function authorDialog(){
    alert("ludvig gjorde sidan 2020");
}

function changeColour(){
    document.getElementById("rubrik").innerHTML = "Ludde nyström";
    document.getElementById("stycke").style.color = "#add8e6";
}

i = 0

function changeImage(){

    if(i == 0){
        document.getElementById("bild").src="https://images.news18.com/optimize/BWnTsVvIX6ljJqRTM289cJcPzsM=/698x552/images.news18.com/ibnlive/uploads/698x552/jpg/2019/08/red1.jpg"
        i = 1
    }
    else{
        document.getElementById("bild").src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/1024px-Solid_blue.svg.png"
        i = 0
    }
    

}