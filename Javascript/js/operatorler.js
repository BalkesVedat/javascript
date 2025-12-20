// JavaScript source code
//Operatörler:

//1. Atama Operatörü (=)

var sayi1 = 50;
var sayi2 = 100;
var userName = "vedatg";
var password = "12345";

//2. Aritmetik Operatörler (+,-,*,/,%)
var toplam = sayi1 + sayi2;
var fark = sayi1 - sayi2;
var carpim = sayi1 * sayi2;
var bolum = sayi1 / sayi2;
var bolumdenKalan = sayi1 % sayi2; // mod alma iþlemi. bir sayýnýn baþka bir sayýya bölümünden kalan deðeri verir.

//3. Birleþik operatörler (++,--,**,+=,-=,*=,/=)
sayi1++; // sayi1 in deðerini 1 arttýr. sayi1 = sayi1 + 1;
++sayi1;
sayi1 += sayi2; // sayi1 = sayi1 + sayi2;
sayi1--;
sayi1 -= sayi2;

for (var i = 1; i <= 10; i++) {

    document.write(i + '<br />');

}




//sayi1 = 5**; //sayýnýn karesini al
sayi1 = Math.floor(5); // 5*5
sayi1 = Math.pow(5, 4); // 5*5*5*5

sayi1 *= sayi2;
sayi1 /= sayi2;

//4. Karþýlaþtýrma operatörleri (==, !=, <=, >=, <, >, <>, ===)

var s1 = 5;
var s2 = 6;

s1 == s2; //false döner.

/*
 ==  saðýna ve soluna yazýlan deðerler eþit ise true döner. deðilse false döner.
 != saðýna ve soluna yazýlan deðerler farklý ise true döner. deðilse false döner.
 ===  saðýna ve soluna yazýlan deðerler hem deðer olarak hem de tip olarak eþit ise true döner. deðilse false döner.
 .
 .
 .
 */

var tamSayi = 50;
var ondalikliSayi = 50;

if (tamSayi === ondalikliSayi) {
    document.write("Esit");
}
else
{
    document.write("Esit degil");
}


//if (kiyaslama) {
//    //kýyaslama sonucu true ise yapýlacak iþlem
//}
//else
//{
//    //kýyaslama sonucu false ise ise yapýlacak iþlem
//}

