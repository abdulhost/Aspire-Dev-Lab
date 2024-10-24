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
$(function () {
    $('[data-toggle="tooltip"]').tooltip(); // Initialize tooltips
});