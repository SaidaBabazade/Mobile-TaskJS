//Task1.Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.
// const numbers =[1,2,3,4,5,6,7,8,9,10];
//  const newLength = Math.floor(numbers.length / 2);
//  const reducedArray = numbers.slice(0, newLength);
//  console.log(reducedArray);

//----------------------------------------------------------------------------------
//Task2.Massivdə yerləşən bütün ədədlərin cəmini tapın.
// let numbers=[6,8,10];
// let sum =0;

// for(let i=0; i<numbers.length; i++){
//     sum+= numbers[i];
// }
// console.log("Butun ededlerin cemi:"+sum);

//--------------------------------------------------------------------
//Task3. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.

// const numbersArray = [4,6,8];

// const maxNumbers =Math.max(... numbersArray);
// const minNumbers =Math.min(...numbersArray);

// console.log("En boyuk eded:" +maxNumbers);
// console.log("En kicik eded:" +minNumbers);
// --------------------------------------------------------------------------
// Task4. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın. Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].
// const ededlerMassivi= [1, 2, 3, 4, 5];
// const tekEddlər = [];
// const cutEddlər = [];

// ededlerMassivi.forEach((eded) => {
//   if (eded % 2 === 0) {
//     cutEddlər.push(eded);
//   } else {
//     tekEddlər.push(eded);
//   }
// });
// console.log("Tək ədədlər: " + tekEddlər);
// console.log("Cüt ədədlər: " + cutEddlər);
//----------------------------------------------------------------------------------------------------------

// Task5. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.

//  const ededlerMassivi =[25, 10, 7, 54, 2, 31, 17, 42, 8, 19];

//  const buyukdenKiciye = ededlerMassivi.slice().sort((a, b) => b - a);
//  const kicikdenBuyuye = ededlerMassivi.slice().sort((a, b) => a - b);

// console.log("Boyukden kiciye siralanmish massiv: " + buyukdenKiciye);
// console.log("Kicikden boyuye siralanmish massiv: " + kicikdenBuyuye);
//--------------------------------------------------------------------------------------
//Task6 Massivdən false deyimli (undefined, null, false və s.i.) elementləri silib yeni massiv qaytaran funksiya yazın.

// function filterElements(arr) {
//     const filteredArray = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//         filteredArray.push(arr[i]);
//       }
//     }
//     return filteredArray;
//   }
  
//   const originalArray = [1, null, 2, undefined, 3, false, 4, 5];
//   const newArray = filterElements(originalArray);
  
//   console.log(newArray); 
  

//---------------------------------------------------------------------------------------------------
// Task7 Massivdə yerləşən elementləri reverse edən funksiya yazın.

// function reverse(arr) {
//     const reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArray.push(arr[i]);
//     }
//     return reversedArray;
//   }
  
//   const originalArray = [1, 2, 3, 4, 5];
//   const reversedArray = reverse(originalArray);
  
//   console.log(reversedArray);
