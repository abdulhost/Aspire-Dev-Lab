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

// Function to increase image size
function enlargeImg() {
    const img = document.getElementById("img1"); // Get the img object using its Id
    img.style.transform = "scale(1.5)"; // Set image size to 1.5 times original
}

// Function to reset image size
function resetImg() {
    const img = document.getElementById("img1"); // Get the img object again
    img.style.transform = "scale(1)"; // Set image size to original
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip(); // Initialize tooltips
});

