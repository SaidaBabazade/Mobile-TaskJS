// Task1
// function free (a,b,c){
// if (a+b+c > 50 || a+b>50 || a>50){
//     return true;
// }else{
//     return false;
// }
// }
// // const FreeShopping = free(5.99,15.99);
// // const FreeShopping = free(399.99);
// const FreeShopping =free(11.99,65.99);
// console.log(FreeShopping);

//Task2
// function suYoxlamaq(insanlar, su) {
//     const gundeSuBitmesi = insanlar * 3;
//     const gunSayi = parseInt(su / gundeSuBitmesi);
//     if (gunSayi === 1) {
//         return "suyunuz 1 gune qurtaracaq daha chox al";
//     } else if (gunSayi > 1) {
//         return (
//             "Sizin su ehtiyatiniz " +
//             gunSayi +
//             " gune qurtaracaq,daha coxalmaga ehtiyac yoxdur"
//         );
//     } else {
//         return "su 1 gunde az muddetde qurtaracaq daha cox al";

//     }
// }
// console.log(suYoxlamaq(4, 10));



// function minMax ( arr){
//    let min = arr[0];
//    let max = arr[0];
//     for( let i= 1; i<arr.length; i++){
//         if (arr[i] < min){
//             min= arr[i];
//         }
//         if (arr[i] >max){
//             max= arr[i];
//     }
// }
//     return[min ,max];
// }

// const numbers = [1, 2, 3, 4, 5];
// const [min, max] = minMax(numbers);

// console.log("Minimum:", min);
// console.log("Maximum:", max);


// const obj = {
//     a: 5,
//     b: 10,
//     metod: function() {
//       return this.a + this.b;
//     }
//   };
  
//   let cavab = obj.metod();
//   console.log(cavab);