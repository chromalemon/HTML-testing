const images = [

    "../images/honeyPan.jpg",
    "../images/croissant.jpg",
    "../images/chocBread.jpg",
    ""


    
];



for (let i = 0; i < images.length; i++){
    const a = document.getElementById(i);

    function setsrc(i){
        const b = images[i];
        return b;
    }

    a.src = setsrc(i);
}

function mvar(){
    

}