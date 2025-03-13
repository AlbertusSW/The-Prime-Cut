// script.js
document.getElementById('scrollButton').addEventListener('click', function() {
    // Ambil elemen tujuan
    const targetSection = document.getElementById('targetSection');

    // Scroll ke elemen tujuan dengan efek smooth
    targetSection.scrollIntoView({ behavior: 'smooth' });
});