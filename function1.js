//Task1.2 daxil olan parametrlərin cəmini qaytaran funksiya yazın.
//  function cem (parametr1, paramert2){
//     return parametr1 +paramert2;
//  }
//  const cemi = cem(6,8);
//  console.log("Parametrlerin cemi:" +cemi) ;
//  ----------------------------------------------------------
//   Task2. Daxil olan parametrin “Tək” və yaxud “Cüt” olduğunu yoxlayıb boolean qaytaran funksiya yazın.
// function tekCutYoxlamaq (parametr){
//     if(typeof parametr !== "number"){
//         return false ;
//     }
//     if(parametr %2 === 0){
//         return "Cut";
//     }else{
//         return "Tek"
//     }
// }
// console.log(tekCutYoxlamaq(5));
// console.log(tekCutYoxlamaq(4));
// console.log(tekCutYoxlamaq("x"));

//---------------------------------------------------------------
// Task3.Parametrlərdə “Ad” və “Soyad” qəbul edib aralarında boşluğ ilə qaytaran funksiya yazın.
// function adSoyadBirleshdirmek(ad, soyad){
//     return ad+" "+soyad
// }
// const ad ="Saida";
// const soyad ="Zadeh"

// const tamAd =adSoyadBirleshdirmek(ad, soyad);
// console.log("Tam ad:"+tamAd)
// ------------------------------------------------------------------
//  Task4.  Daxil olan ədədin mənfi və yaxud müsbət olduğunu yoxlayıb boolean qaytaran funksiya yazın.
  
// function isPositive(number) {
//     if (number > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   const num = -5;
//   const isNumPositive = isPositive(num);
//   console.log(`Is ${num} positive? ${isNumPositive}`);
//---------------------------------------------------------------------------
 //Task5. Parametrdən daxil olan ədədin faktorialını qaytaran funksiya yaradın.

// function faktorial(n) {
//     if(n===0){
//       return 0;
//     }
//       if (n === 1) {
//         return 1;
//       } else {
//         return n * faktorial(n - 1);
//       }
//     }
    
//     const number = 0;
//     const result = faktorial(number);
//     console.log(`Eded ${number} faktorialı==>${result}`);
//------------------------------------------------------------------------------
//Task6 Parametrlərdən gələn intervalda yerləşən ədədləri funksiya ilə console çıxardın. (rekursiya)

// function loop(a,b){
//     if(a<b-1){
//         console.log(a+1);
//         a++;
//         loop(a,b);
//     }
// }
// loop(1,9);
//--------------------------------------------------------------------
 //Task7.Parametrdə n ədədini qəbul edən və n-ci Fibonaççi sayını qaytaran funksiya yazın. (rekursiya)

// function fib (n){
//     let a=1;
//     let b=1;
//     for(let i=2; i<=n;i++){
//         let c=a+b;
//         a=b;
//         b=c;
//     }
//     return b;
// }
// console.log(fib(4))
