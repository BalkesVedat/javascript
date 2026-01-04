// 1. Gizle / Göster & Animasyon (basit)
const btnToggle = document.getElementById("btnToggle");
const box = document.getElementById("animatedBox");

btnToggle.addEventListener("click", () => {
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";
        box.style.opacity = 0;
        let opacity = 0;

        const fadeIn = setInterval(() => {
            opacity += 0.05;
            box.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeIn);
        }, 20);
    } else {
        box.style.display = "none";
    }
});

// 2. Aktif / Pasif Buton
document.getElementById("btnEnable").addEventListener("click", () => {
    document.getElementById("btnSubmit").disabled = false;
});

// 3. Form Kontrolü
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("formMessage");

nameInput.addEventListener("input", () => {
    if (nameInput.value.length >= 3) {
        message.textContent = "Geçerli isim";
        message.style.color = "green";
    } else {
        message.textContent = "En az 3 karakter girin";
        message.style.color = "red";
    }
});

// 4. Class Manipülasyonu
document.getElementById("btnHighlight").addEventListener("click", () => {
    document.getElementById("cardEffect").classList.toggle("highlight");
});
