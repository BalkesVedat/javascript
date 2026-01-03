

function MetinIslemleri()
{
    var isim = "Vedat"; // Global deðiþken tanýmlama. Bütün veri bloklarýndan eriþilebilir.

    let username = "vedat"; // lokal - yerel deðiþkenler için.

    if (username == "vedat") {
        alert('kullanici adi dogru');
    }
    else {
        alert('kullanici adi yanlis');
    }

    const kdv = 0.2; // constant - sabit - program boyunca deðeri deðiþmeyecek hafýza alaný tanýmlamasý için kullanýlýr. Ýlk atamadan sonra içindeki veri deðiþmez.


   // kdv = 0.15;  //tekrar atamayý kabul etmez.

}


function Login() {
    var username = document.getElementById("UserName");
    var password = document.getElementById("Password");
    var mesajKutusu = document.getElementById("Mesaj");
    
    if (username.value == "vedat" && password.value == "1234") {
        mesajKutusu.innerHTML = "Bilgiler Doðru Girildi...";
        window.open("https://www.aribilgi.com", "_blank");
    }
    else {
        mesajKutusu.innerHTML = "Bilgiler Yanlýþ Girildi...";

        username.value = "";
        password.value = "";
    }
}

function Hesapla(islem) {
    let Sonuc = 0;

    let sayi1 = parseInt(document.getElementById("Sayi1").value);
    let sayi2 = parseInt(document.getElementById("Sayi2").value);
    let sonucKutusu = document.getElementById("Sonuc");

    if (sayi1 == null || sayi2 == null) {
        sonucKutusu.value = 0;
        return;
    }

    if (islem == "Topla") {
        Sonuc = sayi1 + sayi2 ;
    }
    else if (islem == "Cikart") {
        Sonuc = sayi1 - sayi2;
    }
    else if (islem == "Carp") {
        Sonuc = sayi1 * sayi2;
    }
    else if (islem == "Bol") {
        Sonuc = sayi1 / sayi2;
    }
    else {
        Sonuc = 0;
    }

    sonucKutusu.value = Sonuc;
}

function KDV() {
    let gelenFiyat = parseFloat(document.getElementById("fiyat").value);
    let gelenKdvOran = parseFloat(document.getElementById("kdvOran").value);
    let sonucKutusu = document.getElementById("KDVSonuc");

    sonucKutusu.value = KDVHesapla(gelenFiyat, gelenKdvOran);
}

function KDVHesapla(fiyat, kdvOrani) {
    return fiyat * kdvOrani;
}

function DegiskenTest() {

    console.log(" var ----------------------------");

    var isim = "Ali'nin defteri";

    //alert(isim);
    //document.write(isim);

    console.log(isim);

    var adet = 55;

    console.log(adet);

    var kdvOrani = 0.2;

    console.log(kdvOrani);

    console.log(adet * kdvOrani);

    var adet = 100; // var ile ayný scope içinde ayný isimli deðiþkenler tekrar yaratýlabilir. (Recreation) 

    console.log(adet);

            {
                var kdvOrani = 0.1; // var ile tanýmlanan deðiþkenler tüm kod bloklarýnda geçerlidir. (Global)
            }

    console.log(kdvOrani);

    console.log(" let ----------------------------");

   // let isim = "vedat";

    console.log(isim); // Daha önceden tanýmlanmýþ bir deðiþken ismi let kullanýlarak ayný blok içinde tekrar tanýmlanamaz. Hata verir. Recreation a kapalý.

    let sayac = 0;
    //  let sayac = 55; //yazýlamaz. hata verir.

    console.log("Ana blokta:" + sayac);

            {
                let sayac = 1; // farklý bir blok içerisinde let ile ayný isimli bir deðiþken tanýmlanabilir. Fakat bu deðiþken sadece bu blokta geçerlidir ve önceki blokta tanýmlanan deðiþkenden ayrý bir deðiþkendir. Blok sona erince bu deðiþken hafýzadan atýlýr. 
                console.log("iç blokta:"+sayac); 
            }

    console.log("Ana blokta:" + sayac);   

    {
        let scopeDegiskeni = "Burada geçerliyim";
        console.log(scopeDegiskeni); 
    }

    // console.log(scopeDegiskeni); //let ile tanýmlanan deðiþken bloktan çýkýldýðýnda hafýzadan atýlýr. Artýk bu deðiþken hafýzada olmadýðý bu kod hata verir. Kodun sonraki satýrlarýný engellememesi için kapatýldý.

    console.log("Test");

    console.log(" const ----------------------------");

    var s1;
    console.log(s1);
    s1 = 50;
    console.log(s1);

    let s2;
    console.log(s2);
    s2 = 100;
    console.log(s2);

    const kdv = 50; // const ifadesi ile tanýmlanan bir deðiþkene ilk deðer atamasý, tanýmlama esnasýnda yapýlmak zorundadýr ve ilk deðer atamasý yapýlmadan bu deðiþken kullanýlamaz. Yoksa kod hata verir ve çalýþmaz.
    
    // const kdv2; Bu satýr çalýþmaz, hata verir. Nedeni ilk deðeri atamasý yapýlmamýþ.

   // const kdv = 25; Bu satýr çalýþmaz. Nedeni, const ifadesinde de ayný let ifadesinde olduðu gibi, ayný scope içinde ayný isimde birden fazla deðiþken tanýmlanamaz. Hata verir.

    //var ve let ile tanýmlanan deðiþkenler ise ilk deðer atamasý yapýlmadan kullanýlabilirler ve kod hata vermez.Bu durumda deðer, programýn kullanýmý esnasýnda "undefined" olarak görünür. Çünkü deðer atanmadýðý için deðikenin tipi de nenüz belli deðldir. Deðerin "undefined" olarak görünmemesi için bu deðiþkenlere, kullanýlmadan önce ilk deðer atamasý yapýlmalýdýr. Bunlarýn ilk deðer atamalarý tanýmlama esnasýnda yapýlmak zorunda deðildir. Sonradan da yapýlabilir.

    console.log(kdv);

    // kdv = 75; const ile tanýmlanmýþ bir deðiþkene tekrar deðer atamasý yapýlamaz. Sadece ilk tanýmlama esnasýnda deðer atanýr ve program boyunca deðiþtirilemez. Sabittir. Bu kod hata verir.

    console.log(kdv);

    // this keywordü ile bir aralýkta yeni deðiþkenler yaratýlabilir. ayný var ile tanýmlanmýþ gibi davranan deðiþkenler oluþur. bunlara this local deðiþkenleri denir.

    this.adet = 85;

    this.sayac = 10;

    this.kdv = 1000;

    kalem = 5000; // eðer bir deðiþken deðeri atama ifadesinde var, let, const, this. ifadelerinden biri kullanýlmadan deðiþken tanýmlanacak olursa, bu þekilde yaratýlan deðiþkene tanýmsýz deðiþen denir. Tanýmsýz deðiþkenler var ile tanýmlanan deðiþkenler gibi davranýr. Kullanýmý önerilmez.

    console.log("adet deðeri:" + this.adet);
    console.log("sayac deðeri:" + this.sayac);
    console.log("kdv deðeri:" + this.kdv);

    console.log(kalem);
    console.log(bardak = 50);


}




