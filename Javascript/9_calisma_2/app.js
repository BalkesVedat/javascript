"use strict";

/**
 * Bu dosya, pratik amaçlı:
 * - DOM içerisinden nesne seçimi
 * - input/checkbox eventleri
 * - hesaplama
 * - accordion aç-kapa
 * - sayfa kaydırma olayları 
 * - CSS değişkenleri ile global tema kontrolü
 * - animasyon (CSS, WAAPI, rAF)
 * örneklerini içerir.
 */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/* ------------------------------
   Toast (küçük bildirim)
--------------------------------*/
let toastTimer = null;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

/* ------------------------------
   Saat (anlık güncelleme)
--------------------------------*/
function pad2(n) {
  return String(n).padStart(2, "0");
}

function updateClock() {
  const d = new Date();
  const hh = pad2(d.getHours());
  const mm = pad2(d.getMinutes());
  const ss = pad2(d.getSeconds());
  $("#clockText").textContent = `${hh}:${mm}:${ss}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ------------------------------
   Yukarı scroll
--------------------------------*/
$("#btnScrollTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ------------------------------
   Textbox canlı önizleme
--------------------------------*/
const txtName = $("#txtName");
const txtNote = $("#txtNote");
const liveName = $("#liveName");
const liveNote = $("#liveNote");

function updateLivePreview() {
  liveName.textContent = txtName.value.trim() || "—";
  liveNote.textContent = txtNote.value.trim() || "—";
}
txtName.addEventListener("input", updateLivePreview);
txtNote.addEventListener("input", updateLivePreview);
updateLivePreview();

/* ------------------------------
   Hesaplama
--------------------------------*/
const numA = $("#numA");
const numB = $("#numB");
const opSelect = $("#opSelect");
const chkRound = $("#chkRound");
const chkHighlightInvalid = $("#chkHighlightInvalid");
const resultText = $("#resultText");

function markInvalid(el, isInvalid) {
  if (!chkHighlightInvalid.checked) {
    el.style.borderColor = "";
    el.style.boxShadow = "";
    return;
  }
  if (isInvalid) {
    el.style.borderColor = "rgba(255, 92, 154, .75)";
    el.style.boxShadow = "0 0 0 4px rgba(255, 92, 154, .12)";
  } else {
    el.style.borderColor = "";
    el.style.boxShadow = "";
  }
}

function parseNumber(inputEl) {
  const v = Number(inputEl.value);
  const invalid = Number.isNaN(v);
  markInvalid(inputEl, invalid);
  return { value: v, invalid };
}

function calculate() {
  const a = parseNumber(numA);
  const b = parseNumber(numB);
  if (a.invalid || b.invalid) {
    resultText.textContent = "Hatalı giriş";
    showToast("Sayı alanlarından biri geçersiz.");
    return;
  }

  let res;
  switch (opSelect.value) {
    case "add": res = a.value + b.value; break;
    case "sub": res = a.value - b.value; break;
    case "mul": res = a.value * b.value; break;
    case "div":
      if (b.value === 0) {
        resultText.textContent = "0'a bölünemez";
        markInvalid(numB, true);
        showToast("B sayısı 0 olamaz (bölme).");
        return;
      }
      res = a.value / b.value;
      break;
    default:
      res = NaN;
  }

  const finalRes = chkRound.checked ? Number(res.toFixed(2)) : res;
  resultText.textContent = String(finalRes);
  showToast("Hesaplama tamamlandı.");
}

$("#btnCalc").addEventListener("click", calculate);

// pratik: enter basınca hesapla
[numA, numB].forEach((el) => {
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculate();
  });
});

/* ------------------------------
   Accordion
--------------------------------*/
const accordion = $("#accordion");

function setAccBodyHeight(item) {
  const body = $(".acc-body", item);
  const content = $(".acc-content", item);
  const open = item.dataset.open === "true";

  if (!body || !content) return;
  // açıkken max-height'ı içerik yüksekliğine eşitle
  body.style.maxHeight = open ? `${content.scrollHeight}px` : "0px";
}

function setAllAcc(open) {
  $$(".acc-item", accordion).forEach((item) => {
    item.dataset.open = open ? "true" : "false";
    setAccBodyHeight(item);
  });
}

function toggleAccItem(item) {
  const currentlyOpen = item.dataset.open === "true";
  item.dataset.open = currentlyOpen ? "false" : "true";
  setAccBodyHeight(item);
}

function initAccordion() {
  const items = $$(".acc-item", accordion);
  items.forEach((item) => setAccBodyHeight(item));

  accordion.addEventListener("click", (e) => {
    const header = e.target.closest(".acc-header");
    if (!header) return;
    const item = header.closest(".acc-item");
    if (!item) return;
    toggleAccItem(item);
  });

  // klavye ile aç/kapa (Enter/Space)
  accordion.addEventListener("keydown", (e) => {
    const header = e.target.closest(".acc-header");
    if (!header) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const item = header.closest(".acc-item");
      if (!item) return;
      toggleAccItem(item);
    }
  });

  $("#btnOpenAll").addEventListener("click", () => setAllAcc(true));
  $("#btnCloseAll").addEventListener("click", () => setAllAcc(false));

  // pencere boyutu değişince yükseklikleri güncelle (içerik kırılabilir)
  window.addEventListener("resize", () => {
    $$(".acc-item", accordion).forEach(setAccBodyHeight);
  });
}
initAccordion();

/* ------------------------------
   CSS Variables ile global ayarlar
--------------------------------*/
const rootStyle = document.documentElement.style;

const rangeRadius = $("#rangeRadius");
const rangeSpacing = $("#rangeSpacing");
const rangeFont = $("#rangeFont");
const accentSelect = $("#accentSelect");

const valRadius = $("#valRadius");
const valSpacing = $("#valSpacing");
const valFont = $("#valFont");

function applyThemeFromControls() {
  const radius = Number(rangeRadius.value);
  const spacing = Number(rangeSpacing.value);
  const fontSize = Number(rangeFont.value);
  const accent = accentSelect.value;

  rootStyle.setProperty("--radius", `${radius}px`);
  rootStyle.setProperty("--spacing", `${spacing}px`);
  rootStyle.setProperty("--fontSize", `${fontSize}px`);
  rootStyle.setProperty("--accent", accent);

  valRadius.textContent = String(radius);
  valSpacing.textContent = String(spacing);
  valFont.textContent = String(fontSize);
}

[rangeRadius, rangeSpacing, rangeFont, accentSelect].forEach((el) => {
  el.addEventListener("input", applyThemeFromControls);
});
applyThemeFromControls();

$("#btnResetTheme").addEventListener("click", () => {
  rangeRadius.value = "14";
  rangeSpacing.value = "12";
  rangeFont.value = "16";
  accentSelect.value = "#8a7dff";
  applyThemeFromControls();
  showToast("Tema ayarları sıfırlandı.");
});

/* ------------------------------
   Scroll ile otomatik açılan/gizlenen içerikler
   - IntersectionObserver: reveal
--------------------------------*/
const revealEls = $$("[data-reveal]");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) ent.target.classList.add("is-visible");
      else ent.target.classList.remove("is-visible");
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

/* ------------------------------
   Scroll badge (aşağı kayınca göster)
   - Scroll event + throttle
--------------------------------*/
const scrollBadge = $("#scrollBadge");

function throttle(fn, delayMs) {
  let inThrottle = false;
  return (...args) => {
    if (inThrottle) return;
    inThrottle = true;
    fn(...args);
    setTimeout(() => (inThrottle = false), delayMs);
  };
}

const onScroll = throttle(() => {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (y > 240) scrollBadge.classList.add("show");
  else scrollBadge.classList.remove("show");
}, 120);

window.addEventListener("scroll", onScroll);
onScroll();

/* ------------------------------
   Animasyonlar
   - WAAPI (Web Animations API)
   - requestAnimationFrame
--------------------------------*/
const waapiBox = $("#waapiBox");
const rafBox = $("#rafBox");

let waapiAnim = null;
let rafId = null;
let rafState = { running: false, t0: 0 };

$("#btnWaapi").addEventListener("click", () => {
  if (waapiAnim) waapiAnim.cancel();

  waapiAnim = waapiBox.animate(
    [
      { transform: "translateY(0px) scale(1)", offset: 0 },
      { transform: "translateY(-18px) scale(1.02)", offset: 0.45 },
      { transform: "translateY(0px) scale(1)", offset: 1 }
    ],
    {
      duration: 520,
      easing: "cubic-bezier(.2,.9,.2,1)",
      iterations: 1
    }
  );

  showToast("WAAPI animasyonu çalıştı.");
});

function rafLoop(ts) {
  if (!rafState.running) return;

  if (!rafState.t0) rafState.t0 = ts;
  const t = (ts - rafState.t0) / 1000; // saniye

  // sinüs ile x hareketi
  const x = Math.sin(t * 4) * 22; // hız=4, genlik=22px
  rafBox.style.transform = `translateX(${x}px)`;

  rafId = requestAnimationFrame(rafLoop);
}

$("#btnRaf").addEventListener("click", () => {
  if (rafState.running) return;

  rafState.running = true;
  rafState.t0 = 0;
  rafId = requestAnimationFrame(rafLoop);
  showToast("rAF animasyonu başladı.");
});

$("#btnStopAnim").addEventListener("click", () => {
  if (waapiAnim) {
    waapiAnim.cancel();
    waapiAnim = null;
  }
  if (rafId) cancelAnimationFrame(rafId);
  rafId = null;
  rafState.running = false;
  rafState.t0 = 0;
  rafBox.style.transform = "";
  showToast("Animasyonlar durduruldu.");
});

/* ------------------------------
   İlave egzersiz fikirleri 
--------------------------------*/
/**
 * 1) Hesaplamaya yüzde/üs/mod ekle.
 * 2) Accordion: sadece 1 tane açık kalsın (diğerleri kapansın).
 * 3) Reveal: seçenekler bir kere göründükten sonra kapanmasın.
 * 4) Tema paneline “dark/light” toggle ile tema seçimi ekle.
 * 5) rAF animasyonunda sürükle-bırak ile hız ayarla.
 */
