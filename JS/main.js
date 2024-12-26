const menuIcon = document.getElementById("menuIcon");
const menuOverlay = document.getElementById("menuOverlay");
const closeIcon = document.getElementById("closeIcon");

menuIcon.addEventListener("click", () => {
    menuOverlay.style.right = "0";
});

closeIcon.addEventListener("click", () => {
    menuOverlay.style.right = "-100%";
});





 // Haritayı başlatma
 const map = L.map('map').setView([38.34126347093579, 38.43490123325463], 15); // Koordinatlar ve zoom seviyesi

 // OpenStreetMap katmanını ekleme
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19, // Maksimum yakınlaştırma seviyesi
     attribution: '© OpenStreetMap contributors'
 }).addTo(map);

 // İşaretçi ekleme
 const marker = L.marker([38.351, 38.333]).addTo(map)
     .bindPopup('<b>Mersin Akdeniz</b><br>Buraya işaretçi eklendi.') // Popup mesajı
     .openPopup();