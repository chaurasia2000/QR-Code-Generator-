const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrtext = document.getElementById("qrtext");

function generateQR() {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
};