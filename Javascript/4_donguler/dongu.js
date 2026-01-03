// JavaScript source code
function Donguler() {
    // js de bir kod 1 den fazla kere çalýþacak ise, kodu tekrar tekrar yazmak yerien döngü yapýlarýný kullanýrýz. Döngüler bir iþlemin bizim istediðimiz sayýda takrarlanarak çalýþtýrýlmasýný saðlar.
    // 1. For döngüsü: genel taným :

/*    For döngüsü içinde bir deðiþken ve bir koþul tanýmlarýz. Deðiþkenimiz koþuldaki deðere ulaþýncaya kadar for bloðu içindeki kodlar tekrarlanýr. kos her tekrarlandýðýnda dðiþken deðeri deðiþtirilmelidir.*/

    //for (deðiþken tanýmla; koþul; deðiþkeni arttýr/eksilt)
    //{
    //    iþlemler;
    //    ...
    //}
 

    for (var sayac = 1; sayac <= 10; sayac++) {
        document.write(sayac + "<br />");
    }

    document.write("-------------------------");

    document.write("<ul>")

    for (let sayac = 1; sayac<=10; sayac++)
    {
        document.write("<li>"+sayac+"</li>")
    }

    document.write("</ul>");

    document.write("------------------------- <br />");

    var secim = "KÖFTE"; // tekli string deðeri tutan deðiþken

    //DÝZÝ (ARRAY): Ýçinde ayný tipten birden fazla deðeri tutan deðiþkenlerdir.
    var degerler = [25,58,1,17,65,42,19,11,51,77,100];

    var menuItems = ["ANA_SAYFA","HAKKIMIZDA","VIZYON","MISYON","URUNLER","ILETISIM", "PRIVACY", "SITE_KULLANIM_KOSULLARI"];

    for (var i = 0; i < menuItems.length ; i++)
    {
   document.write("<a href='" + menuItems[i]+".html'>"+menuItems[i] + "</a> <br />");
     /*   <a href='ANA_SAYFA.html'>ANA_SAYFA</a>*/
    }

    document.write(" Consol a for döngüsü ile bilgi yazdýrma. ------------------------- <br />");

    for(let adet=1;adet<=10;adet++)
    {
        console.log(adet);
    }

    document.write("------------------------- <br />");

    /*
    For döngüsünde, tanýmlamanýn yapýldýðý kýsýmdaki; deðiþken tanýmlama, koþul belirtme ve deðiþken deðeri arttýrma kýsýmlarý opsiyoneldir. Deðiþken tanýmý döngüye girmeden önce yapýlabilir ve döngü içinde kullanýlabilir. koþul kontrolü ile döngünün sonlandýrýlmasýný ve deðiþken deðerinin arttýrýmýný saðlayan kodlar da for döngüsünün içinde yazýlabilir.    
    */ 

    let adet = 1; // Deðiþken tanýmýmýzý burada yaptýk.

    for (;;)
    {
        console.log(adet);    
        adet++; // deðiþken deðerimizi burada arttýrdýk.
        if (adet>10) // Koþul kontrolümüzü yaptýk.
        {
            break; // koþul saðlandýðýnda for döngüsünü bitiren break komutu ile döngüyü sonlandýrdýk.       
        }
    }

    document.write("------------------------- <br />");
    document.write("WHILE Döngüsü <br />");

  /*  
    while(koþul)
    {
        kodlar    
    }

    kodun çalýmasý için belli bir adet belirtemiyorsak, koþulumuz saðlandýðý müddetçe çalýþabilecek bir döngüye ihtiyacýmýz olduðunda while döngüsü kullanýlýr.

    */

   let sayi = 5;

   while(sayi<=15)
   {
       document.write(sayi) ;
       sayi++;
   }

    document.write("------------------------- <br />");

   let sayi2 = 55;
   let cevap = true;

   while(cevap) // cevap==true
   {
       document.write(sayi2);
       sayi2++;

       if(sayi2>100)
       {
            cevap = false;
       }
    }
    
    document.write("----------------- <br />");

    let menuNo = 0;

    while(menuItems[menuNo])
    {
     document.write(menuItems[menuNo]+"<br />");
     menuNo++;
    }

document.write("--------------------- <br />");

document.write("DO...WHILE Döngüsü <br />");
/*
do
{
 ....kodlar
}while(koþul)

Do ... While döngüsünde önce koþul kontrolü yapýlmadan 1 kez kodumuz çalýþýr sonra koþul kontrolü yapýlýr. Diðer tüm özellikleri while döngüsü ile aynýdýr.

*/

let intSayac = 0;

do
{
    document.write("Merhaba <br />");
    intSayac++;
}while(intSayac<=5)

    document.write("------------------ <br />");

    document.write("FOR IN (FOREACH) Döngüsü <br />");

    // FOR .. IN  döngüsü, bir koleksiyondaki her bir ayrý deðer için tek tek dönerek çalýþýr. Koleksiyonda kaç adet eleman var ise o kadar döner. hiç eleman yoksa hiç çalýþmaz. tüm elemanlar için tek tek çalýþtýktan sonra biter, ayrýca bitirme için koþul vermeye gerek yoktur.


    for (var eleman in menuItems)
    {
        document.write("<a href='" + menuItems[eleman] + ".html'>" + menuItems[eleman] + "</a> <br />");
    }

    /*<a href='anasayfa.html'>anasayfa</a> <br />*/

    document.write("------------------ <br />");

    for (var eleman in degerler) {
        document.write(degerler[eleman] + "<br />");
    }

    document.write("------------------ <br />");

    var toplamSonuc = 0;

    for (var eleman in degerler) {
        toplamSonuc += degerler[eleman];
    }

    document.write("Deðerler listesindeki elemanlarýn toplamý = " + toplamSonuc);

    var linkler = document.getElementsByTagName("a");

    for (var i = 0; i < linkler.length; i++) {

        if (linkler[i].innerHTML=="URUNLER") {
            continue; // döngüyü bu seferlik atla, baþa dönüp bir sonraki deðer için tekrar çalýþ.
            //break; // döngüden çýk, devam etme.
        }

        linkler[i].style.color = "#FF0000";
    }

    //for (var item in linkler) {
    //    linkler[item].style.backgroundColor = "#000000";
    //}

    document.write("------------------ <br />");

    var arabalar = [];

    arabalar[0] = "Mercedes";
    arabalar[1] = "BMW";
    arabalar[2] = "Audi";
    arabalar[3] = "Opel";
    arabalar[4] = "Wolksvagen";

    for (var i in arabalar) {
        document.write(arabalar[i]);
    }


}