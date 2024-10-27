function openWhatsApp(plan) {
    const message = `I am interested in the ${plan}.`;
    const phoneNumber = '+918882084910'; // Replace with your phone number
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    
    // let link;

    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     link = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    // } else {
    //     link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    // }

    // window.open(link, '_blank');
}

function onClick(element) {
    // Get the background image using getComputedStyle
    var bgImage = window.getComputedStyle(element).backgroundImage;

    // Extract the URL from the background-image string
    var imageUrl = bgImage.replace(/url\(["']?/, '').replace(/["']?\)/, '');

    // Set the src of the modal image to the extracted URL
    document.getElementById("img01").src = imageUrl;
    document.getElementById("modal01").style.display = "block";
}
$(document).ready(function() {
    // Set the first image box to be expanded by default
    $(".cstm-img-box:first").addClass("expand");

    $(".cstm-img-box").mouseover(function() {
        $(".cstm-img-box").removeClass("expand");
        $(this).addClass("expand");
    });

    $(".cstm-img-box").mouseout(function() {
        // Check if the mouse is not over any image box and reapply expand to the first box
        if ($(".cstm-img-box.expand").length === 0) {
            $(".cstm-img-box:first").addClass("expand");
        }
    });

    // Ensure the first box is expanded when the mouse leaves the gallery
    $(".cstm-gallery").mouseleave(function() {
        $(".cstm-img-box").removeClass("expand");
        $(".cstm-img-box:first").addClass("expand");
    });
});
// function onClick(element) {
//     document.getElementById("img01").src = element.src;
//     document.getElementById("modal01").style.display = "block";
//   }
  
$(function () {
    $('[data-toggle="tooltip"]').tooltip(); // Initialize tooltips
});

