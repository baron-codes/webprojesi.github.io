  function formuGonder(e) {
    e.preventDefault(); // sayfa yenilenmesin
    const ad = document.getElementById('ad').value;
    const eposta = document.getElementById('eposta').value;
    const mesaj = document.getElementById('mesaj').value;

    // Burada normalde backend'e gönderirsin
    document.getElementById('iletisimSonuc').innerHTML = 
      `Teşekkürler ${ad}, mesajın alındı! 📨`;
    
    // Formu temizle (isteğe bağlı)
    document.getElementById('ad').value = '';
    document.getElementById('eposta').value = '';
    document.getElementById('mesaj').value = '';
  }