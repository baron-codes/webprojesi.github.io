<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $ad = $_POST['ad'];
    $eposta = $_POST['eposta'];
    $mesaj = $_POST['mesaj'];

    $to = "topalkomando@gmail.com"; // E-posta adresini buraya yazın
    $subject = "Yeni İletişim Formu Mesajı";

    // E-posta içeriği
    $message = "Ad Soyad: $ad\n";
    $message .= "E-posta: $eposta\n";
    $message .= "Mesaj: $mesaj\n";

    // E-posta başlıkları
    $headers = "From: no-reply@example.com";

    // E-posta gönderme işlemi
    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>mesajınız başarıyla gönderild! 🎉</h2>";
    } else {
        echo "<h2>Mesaj gönderilemedi, lütfen tekrar deene</h2>";
    }
}
?>
<!-- Hocam Buralar  Yapay Zeka Destekli mecbur bir yandan yapıp bir yandan öğreniyoz -->
