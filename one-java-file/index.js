// let ism= prompt("Ismingizni kiriting", "")

// if (ism.length>7) {
//     console.log ("Ismingiz uzun");    
// }

// else if(ism.length<=7) {
//     console.log("ismingiz qisqa");        
// }



// let isming = prompt("ismingizni kiriting")
// let famil = prompt("familyangizni kiriting")
// if (isming.length == famil.length) {
//     console.log("ikkalasi teng");
// }else if (isming.length > famil.length) {
//     console.log("Ismingiz uzun");
// }else if (isming.length < famil.length) {
//     console.log("Familyangiz uzun");
// }



// let hafta1 = +prompt("Hafta kunlarini kiriting", "")
// if (hafta1== 1) {
//     console.log("Dushanba");    
// } else if (hafta1== 2) {
//     console.log("seshanba");    
// }else if (hafta1== 3) {
//     console.log("Chorshanba");    
// } else if (hafta1== 4) {
//     console.log("Payshanba");    
// } else if (hafta1== 5) {
//     console.log("Juma");    
// }else if (hafta1== 6) {
//     console.log("Shanba");    
// } else if (hafta1== 7) {
//     console.log("Yakshanba");    
// }else{
//     console.log("Bunaqa hafta kuni yo'q");
// }



// let hafta = +prompt("Hafta kunlarining raqamini kiriting", "")
// switch (hafta) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break; 
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;     
//     case 7:
//         console.log("Yakshanba");
//         break;


//     default:
//         console.log("Xato malumot kiritdingiz");
//         break;

// }



// // ! 1. Kolibri qushi bir daqiqada o'rtacha 240 marta nafas olsa, 1sekundda necha marta nafas oladi?


// let nafas1 = 240;
// let minut = 60;
// let x = nafas1 / minut;
// console.log(x);


// // ! 2. Sayohlar soatiga 65km tezlik bilan 2soat,
// //  keyin esa soatiga 70km tezlik bilan yana 1soat yurishdi. Ular jami qancha masofa yurishgan?

// let soat2 = 2
// let tezlik1 = 65
// let masofa1 = soat2 * tezlik1
// console.log(masofa1);
// let tezlik2 = 70;
// let umimas = masofa1 + tezlik2
// console.log(umimas);


// // ! 3. Sutchi ayol har birida 3litrdan 3banka sut sotdi, 
// // Agar 1litr sut 5000 so'm bo'lsa, bankalardagi hamma sut qancha turadi?

// let bittaban = 3
// let litrsut = 5000
// let bittabannarx = bittaban * litrsut
// console.log(bittabannarx);
// let bankasoni = 3
// let umibannar = bittabannarx * bankasoni
// console.log(umibannar);


// // ! 4. Fermer umumiy massasi 1828kg ikkita bir hil sigi va to'rta bir hil buqa sotdi. 
// // Bitta sigirning massasi 286 kg bo'lsa 1ta buqaning massasi qancha?

// let umimassa = 1828
// let bitsigimas = 286
// let sigirsoni = 2
// let buqasoni = 4
// let sigirumimas = bitsigimas * sigirsoni
// console.log(sigirumimas);
// let buqaumimas = umimassa - sigirumimas
// console.log(buqaumimas);
// let bittabuqamas = buqaumimas / buqasoni
// console.log(bittabuqamas);

// // a butun son berilgan.
// //  Agar a soni juft bo'lsa consolega juft yoki toq bo'lasa consolega toq natijani chiqaring. Javobi


// let son = +prompt("Xoxlagan raqamingizni kiriting", "");

// if (son % 2 === 0) {
//     console.log("juft");
// } else if (son % 2 !== 0) {
//     console.log("toq");
// } else {
//     console.log("Faqat son kiriting");
// }

// a butun son berilgan. Agar a soni musbat bo'lsa consolega musbat,
//  manfiy bo'lsa consolega manfiy yoki son nolga teng bo'lsa consolega nol natijani chiqaring.

// let musman = +prompt("Raqamlar kiriting", "")
// if (musman > 0) {
//     console.log("Musbat");    
// }else if (musman < 0) {
//     console.log("Manfiy");    
// }else if (musman == 0) {
//     console.log("siz nol raqam kiritdingiz bu musbat ham manfiy ham emas");
// }else{
//     console.log("Nimadir xato ketdi");
// }


// 3ta son berilgan a,b,c sonlar. a b dan katta b c dan kattaligini tekshiring.

// let a = +prompt("Faqat sonlar kiriting")
// let b = +prompt("Faqat sonlar kiriting")
// let c = +prompt("Faqat sonlar kiriting")
// if (a > b % a > c) {
//     console.log("a b va c dan katta");
// }



// a, b sonlar berilgan sonlarni ikalasi ham toq sonligini tekshiring.

// let a = +prompt("son kiriting")
// let b = +prompt("son kiriting")
// if (a/2) {
    
// }else if (b % 2=== 0) {
//     console.log("Ikalsi ham toq");
// }



// switch, case - masalalar
// hafta kunlari uchun a soni berilgan songa qarab hafta kunlarini nomini chiqaring.
// Telefon nomer kodi uchun a soni orqali qaysi kompaniya ekanligini chiqaring.
// a butun son berilgan. Shu songa qarab baho natijalarini chiqaruvchi dastur tuzing.
// 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo
// a oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing.
// a, b sonlar va c amal berilgan c amalga qarab a va b sonlar ustida amal bajaruvchi dastur tuzing.


// let hafta = +prompt("Hafta kunlarining raqamini kiriting", "")
// switch (hafta) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break; 
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;     
//     case 7:
//         console.log("Yakshanba");
//         break;


//     default:
//         console.log("Xato malumot kiritdingiz");
//         break;

// }


// let sim = +prompt("Telefon raqam kompaniyalari bosh kodlarini kiriting")

// switch (sim) {
//     case 99:
//         console.log("Uzmobile");
//         break;
//     case 88:
//         console.log("Mobiuz");
//         break;
//     case 93:
//         console.log("Ucell");
//         break;
//     default:
//         break;
// }

// let reyting = +prompt("Maktabda kunlik oladigan bahongizni kiriting !!DIQQAT:Faqat aldamang🤣🤣")

// switch (reyting) {
//     case 5:
//         console.log("A'lo natija");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;  
//     case 2:
//         console.log("Qoniqarsiz");
//         break; 
//     case 1:
//         console.log("Yomon");
//         break;

//     default:
//         break;
// }

// let fasl = +prompt("Oylarning raqamlarini kiriting")

// switch (fasl) {
//     case 1:
//         console.log("Qish");
//         break;
//     case 2:
//         console.log("Qish");
//         break;
//     case 3:
//         console.log("Bahor");
//         break;
//     case 4:
//         console.log("Bahor");
//         break;
//     case 5:
//         console.log("Bahor");
//         break;
//     case 6:
//         console.log("Yoz");
//         break;
//     case 7:
//         console.log("Yoz");
//         break;
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//         console.log("Kuz");
//         break;
//     case 10:
//         console.log("Kuz");
//         break;
//     case 11:
//         console.log("Kuz");
//         break;
//     case 12:
//         console.log("Qish");
//         break;

//     default:
//         break;
// }