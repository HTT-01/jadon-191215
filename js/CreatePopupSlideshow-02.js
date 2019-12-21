
var hinh=[
    "images/Final/Corporate-01/fred-kloet-Bc1hHWgxMaM-unsplash.jpg",
    "images/Final/Corporate-01/fred-kloet-NVTbyTPsgAk-unsplash.jpg",
    "images/Final/Corporate-01/fred-kloet-Qh-4LBPcxIo-unsplash.jpg",
];
var soluong=3;

var slideIndex;

function plusSlides(n) {
    slideIndex = slideIndex + n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("popMySlides");
    var dots = document.getElementsByClassName("popDot");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    //document.getElementById("myCarousel").style.display="none";

    if (n > soluong) {slideIndex = 1}    
    if (n < 1) {slideIndex = soluong}

    for (i = 0; i < dots.length; i++) {
        if (i>soluong-1) {dots[i].style.display="none"}
        dots[i].className = dots[i].className.replace(" active", "");
    }

    dots[slideIndex-1].className += " active";
    modalImg.src=hinh[slideIndex-1];
    slides[slideIndex-1].style.display = "block";  

}

function popCorp01(){
   

    
    // Get the modal
        var modal = document.getElementById("myPopModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        

        
        modal.style.display = "block";
        showSlides(slideIndex = 1);





        // Get the <span> element that closes the modal
        var check=0;
        var span = document.getElementById("closePopup");

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        check=1;
        }    

        if(check==1){return false;}
}