document.addEventListener('DOMContentLoaded', function() {
    // Resimler ve açıklamaları
    const images = [
        { src: 'https://media.istockphoto.com/id/485947800/tr/foto%C4%9Fraf/clock-tower-izmir.jpg?s=612x612&w=0&k=20&c=CqaqzJpDMSkoNrghyCuXYKvtPSiTMPuMVFXGXhFP4oI=', desc: 'İzmir' },
        { src: 'https://content.skyscnr.com/m/6c318dca1fef4692/original/GettyImages-466997420.jpg?crop=1048px:699px&quality=100', desc: 'Muğla' },
        { src: 'https://cdnp.flypgs.com/files/Sehirler-long-tail/Antalya/antalya-sehir-rehberi-sahiller.jpg', desc: 'Antalya' },
        { src: 'https://garentablogfiles.blob.core.windows.net/images/3dfb47e3-5c36-4fdc-971f-532ff67330eb.jpg', desc: 'Aydın' },
        { src: 'https://muze.gen.tr/img/maidens-tower-istanbul.jpg', desc: 'İstanbul' }
    ];

    let currentIndex = 0;
    const imageElement = document.getElementById('profile-img');
    const descriptionElement = document.getElementById('image-description');
    const containerElement = descriptionElement.parentNode;

    // Şehir isimlerini güncelleme butonu
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Güncelle';
    containerElement.appendChild(updateButton);
    let toggle = false;
    updateButton.addEventListener('click', function() {
        toggle = !toggle;
        descriptionElement.textContent = toggle ? 'Tuna Gümüşok Fotoğrafları' : images[currentIndex].desc;
    });

    // En üste dön butonu
    const topButton = document.createElement('button');
    topButton.textContent = 'En Üste Dön';
    topButton.style.cssText = "position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); font-size: 18px; padding: 10px 20px;";
    document.body.appendChild(topButton);
    topButton.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });

    // Resim değiştirme fonksiyonu
    imageElement.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex].src;
        imageElement.alt = images[currentIndex].desc;
        if (!toggle) {
            descriptionElement.textContent = images[currentIndex].desc;
        }
    });

    // Pencere boyutu değiştiğinde uyarı ver
    window.addEventListener('resize', function() {
        alert('Pencere boyutu değiştirildi!');
    });

    // Hoş geldiniz mesajını göster
    function showWelcomeMessage() {
        alert('Sayfama Hoş Geldiniz!');
    }
    window.onload = showWelcomeMessage; // Olay dinleyicisi olarak atanır
});
    