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
  'Body Kit': 9000,
  'Kamber Kiti': 9000,
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


  