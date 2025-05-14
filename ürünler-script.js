function filtr(kategori) {
  const urunler = document.querySelectorAll('.urun');
  urunler.forEach(urun => {
    if (urun.classList.contains(kategori)) {
      urun.style.display = 'block';
    } else {
      urun.style.display = 'none';
    }
  });
}
 function sepeteEkle(urunAdi) {
      const sepet = document.getElementById('sepet');
      const yeniUrun = document.createElement('div');
      yeniUrun.classList.add('sepet-urun');
      yeniUrun.textContent = `✔ ${urunAdi} sepete eklendi`;
      sepet.appendChild(yeniUrun);
    }
window.onload = function () {
  filtr('mekanik');
}

  const sepet = {};

  function sepeteEkle(urunAdi) {
    if (sepet[urunAdi]) {
      sepet[urunAdi]++;
    } else {
      sepet[urunAdi] = 1;
    }
    sepetiGoster();
  }

  function sepetiGoster() {
    const sepetDiv = document.getElementById('sepet');
    sepetDiv.innerHTML = ''; // önce sepeti temizle

    for (let urun in sepet) {
      const adet = sepet[urun];
      const p = document.createElement('p');
      p.textContent = `${urun} x${adet}`;
      sepetDiv.appendChild(p);
    }
  }


  const fiyatlar = {
  'Coilover':10000,
  'Spoiler': 1600,
  'Kelebek Cam Kaplama ': 498,
  'Ön Lip': 1500,
  'Özel Plakalık': 400,
  'Body Kit':  9000,
  'Kamber Kiti': 9000,
  'Areon Koku': 450,
  'Yarasa Ayna': 500,
  'Koltuk Kılıfı': 400,
  'Air': 30000,
  'Varex': 4976,
  'Kule Gergisi': 5500,
  'Flanşlar': 2500,
  'SSR Jant': 35000,
  'Kamber Kiti': 6000,
  'Açık Hava': 1500,
  'Amarikan Park': 600,
  'Double Ekran': 13000,
  'Sis Ledi': 1500,
  'Geri Dönüş Kamerası': 900,
  'Reiss Midrange': 4588,
  'Ayak Altı Led': 700,
  'Diadem Ampul ': 800,
  'Xenon Far': 13000,
};

function sepetEkle(urunAdi) {
  if (sepet[urunAdi]) {
    sepet[urunAdi]++;
  } else {
    sepet[urunAdi] = 1;
  }
  sepetiGoster();
}

function sepetiGoster() {
  const sepetDiv = document.getElementById('sepet');
  sepetDiv.innerHTML = ''; // Temizle
  let toplam = 0;

  for (let urun in sepet) {
    const adet = sepet[urun];
    const fiyat = fiyatlar[urun] || 0;
    toplam += fiyat * adet;

    const p = document.createElement('p');
    p.textContent = `${urun} x${adet} - ${fiyat * adet} TL`;
    sepetDiv.appendChild(p);
  }

  document.getElementById('toplamTutar').textContent = `Toplam: ${toplam} TL`;
}


// deneme son son

function sepetiOnayla() {
    const telNo = "905444741612"; // ← kendi telefon numaranı başında 90 ile yaz
    let mesaj = "Selam, aşağıdaki ürünleri sipariş etmek istiyorum:%0A";

    let toplamTutar = 0;

    for (let urun in sepet) {
        const adet = sepet[urun];
        // Burada fiyatı alacağız
        const fiyatElement = document.querySelector(`[onclick*="${urun}"]`).previousElementSibling;
        const fiyatMetni = fiyatElement.textContent;
        const fiyat = parseInt(fiyatMetni.replace(/\D/g, '')); // Sadece sayıyı al

        toplamTutar += fiyat * adet;
        mesaj += `- ${urun} x${adet} = ${fiyat * adet} TL%0A`;
    }

    mesaj += `%0AToplam: ${toplamTutar} TL`;

    const whatsappLink = `https://wa.me/${telNo}?text=${mesaj}`;
    window.open(whatsappLink, '_blank');
}

  
