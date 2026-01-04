$(document).ready(function () {

    // 1. Gizle / Göster + Animasyon
    $("#btnToggle").on("click", function () {
        $("#animatedBox").fadeToggle(400);
    });

    // 2. Aktif / Pasif Buton
    $("#btnEnable").on("click", function () {
        $("#btnSubmit").prop("disabled", false);
    });

    // 3. Form Kontrolü
    $("#nameInput").on("input", function () {
        if ($(this).val().length >= 3) {
            $("#formMessage")
                .text("Geçerli isim")
                .css("color", "green");
        } else {
            $("#formMessage")
                .text("En az 3 karakter girin")
                .css("color", "red");
        }
    });

    // 4. Class Ekle / Kaldır
    $("#btnHighlight").on("click", function () {
        $("#cardEffect").toggleClass("highlight");
    });

});
