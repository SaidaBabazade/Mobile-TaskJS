
//Hometask2

//Task1 1. 10-dan 1-ə qədər bütün ədədləri console çıxardın
// for(let i=100; i>0; i--){
//     console.log(i)
// }


//Task2  0-100 intervalında yerləşən 9-a tam bölünən ədədləri console çıxardın.
// for (let i = 0; i <= 100; i++){
//     if(i%9 === 0){
//         console.log(i);
//     }
// }

//Task3 0-100 intervalında yerləşən cüt ədədlərin sayın tapıb, console çıxardın.
//for (let i =0; i<=100; i+=2){
//     console.log(i);
// }


//Task5  2 verilmiş ədədin intervalında yerləşən ədədləri kvadrata yüksəldib, console çıxardın.

// let ilk =2; 
// let  son=5;

// for (let i=start ; i<=encodeURI; i++){
//     let kvadrat =i*i;
//     console.log(i+"kvadrat:"+kvadrat);

// }

// Task6 2 verilmiş ədədin intervalında yerləşən ədədlərin cəmini tapıb, console çıxardın. (while ilə)
// let eded1 = 2; 
// let eded2 = 6; 
// let cem = 0;   
// if(eded1 == 2  )
// while (eded1 < eded2) {
//     cem += eded1;
//     eded1++;
// }
// console.log(`Interval  cem: ${cem}`);

// Task 7  Verilmiş ədədin ən böyük bölənini tapib, console çıxardın.

// let bolunen=4;
// let boyuk_bolen=1;
// let i=2;

// while(bolunen%i===0)
// {
// for(i=2; i<bolunen; i++)

//     {
//         boyuk_bolen=i; 
//     }
// }
// console.log(boyuk_bolen);

//  Task8 (BONUS) console-da “X”-lərdən ibarət düzbucaqlı üçbucaq çıxardın. Daha sonra bu üçbucaqı x və y xətti üzrə çevirin. 

// PRAMIDA x OXU UZRE
// let n=5;
// let text=""

// for( let i=1; i<=5; i++ )
// {
//         text+="x";
//         console.log(text);
// }

// //TASK BONUS 1.2: PRAMIDA y OXU UZRE
// let y=5;
// for( let i=y; i>=1; i-- )
// {
//         let text="";
//         for(let j=1; j<=i; j++)
//         {
//                 text+="x";      
//         }
//         console.log(text);

// }

        
    

//Hometask1
//Task1 Ədədin kvadratın və kubun, console çıxardın.
//kvadrat(14)
//  function kvadrat (num){
//      let kvadrat
//      kvadrat = num * num
//      console.log
//     console.log(kvadrat)
// }
  

//kub(8)
//  function kub (num){
//      let kub
//      kub = num * num*num
//      console.log
//     console.log(kub)

// }



//  Task2   Sürət (v) 60 km/saat. Məsafə (s) 180 km. Neçə “dəyqəyə” bütün məsafə qət ediləcək?
//  const s = 180; // Məsafə (km)
// const v = 60;  // Sürət (km/saat)

// // Məsafəni sürətə bölərək dəqiqəyə çeviririk
// const timeInHours = s / v;

// // Dəqiqəni saat və dəqiqəyə ayırırıq
// const hours = Math.floor(timeInHours);
// const minutes = Math.round((timeInHours - hours) * 60);

// console.log(`Məsafəni qət etmək üçün ${hours} saat ${minutes} dəqiqəyə ehtiyac var.`);


// Task3  3 ədəd var. Ədədlərin arasında ən böyük olanı tapıb console çıxardın.

// const num1 = 25;
// const num2 = 14;
// const num3 = 46;

      
// if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
//         const maxNumber = Math.max(num1, num2, num3);
//         console.log(`Ən böyük ədəd: ${maxNumber}`);
//       } else {
//         console.log('Düzgün ədədlər daxil etmədiniz.');
//       }


// Task4  Ədədin tək və yaxud cüt olduğunu aşkarlayıb, console çıxardın.
//let number = 13;
// if (number <= 1) {
//   console.log(number + " ne odu ne bu");
// } else if (number <= 3) {
//   console.log(number + " :  tekdir.");
// } else if (number % 2 === 0 || number % 3 === 0) {
//   console.log(number + "cutdur");
// } else {
//   let i = 5;
//   while (i * i <= number) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       console.log(number + " cutdur");
//       break;
//     }
//     i += 6;
//   }
//   if (i * i > number) {
//     console.log(number + ":tekdir");
//   }
// }

//Task5 1-dən 7-yə kimi bir ədəd daxil etmək olar. Ədədə uyğun olaraq həftənin gününü console çıxardın.

// const dayOfWeek = 5;
  
//   switch (dayOfWeek) {
//     case 1:
//       console.log('Bazar ertəsi');
//       break;
//     case 2:
//       console.log('Çərşənbə axşamı');
//       break;
//     case 3:
//       console.log('Çərşənbə');
//       break;
//     case 4:
//       console.log('Cümə axşamı');
//       break;
//     case 5:
//       console.log('Cümə');
//       break;
//     case 6:
//       console.log('Şənbə');
//       break;
//     case 7:
//       console.log('Bazar');
//       break;
//     default:
//       console.log('Düzgün bir ədəd daxil etmədiniz.');
//   }
  


// Task6  İkirəqəmli ədədin hərfi təsvirini console çıxardın. Məsələn, "25" daxil etdikdə console "iyirmi beş", "13" isə "on üç" çıxaracağ
//const bir = ["", "bir", "iki", "üc", "dord", "bew", "altı", "yeddi", "sekkiz", "doqquz"];
// const on = ["", "on", "iyirmi", "otuz", "qirx", "elli", "altmıw", "yetmiw", "seksen", "doxsan"];

// function ikireqemli(eded) {
//     if (eded < 10) {
//         return bir[eded];
//     } else if (eded >= 10 && eded < 20) {
//         const birinciReqem = eded % 10;
//         return "on " + bir[birinciReqem];
//     } else {
//         const onluq = Math.floor(eded / 10);
//         const birlik = eded % 10;
//         return onlar[on] + " " + birler[bir];
//     }
// }

// console.log(ikireqemli(25)); 
// console.log(ikireqemli(13));



// Task7  0-1000 intervalında olan bir ədədin neçə ədədli olduğunu console çıxardın. Məsələn, "76" daxil etdikdə console “iki rəqəmli ədəd” çıxaracağ.

// const number = 76;
  
//   if (number >= 0 && number <= 9) {
//     console.log('Bir rəqəmli ədəd');
//   } else if (number >= 10 && number <= 99) {
    
   
// console.log('İki rəqəmli ədəd');
//   } 
  
// else if (number >= 100 && number <= 999) {
    
   
// console.log('Üç rəqəmli ədəd');
//   } 
 
// else if (number === 1000) {
    
   
// console.log('Min');
//   } else {
//     console.log('Düzgün bir ədəd daxil etmədiniz.');
//   }