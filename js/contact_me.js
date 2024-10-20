function kirimPesan(event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var pesan = document.getElementById("pesan").value;
    var text = "Halo, saya " + nama + ".\nEmail: " + email + ".\nPesan: " + pesan;
    var nomorWhatsApp = "6285156611075";
    var whatsappURL = "https://wa.me/" + nomorWhatsApp + "?text=" + encodeURIComponent(text);
    window.open(whatsappURL, "_blank");
}
