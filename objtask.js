// Task1.student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər birini console çıxardın.
//  const student = {
//   name:"Saida",
//   age: 25,
//   course:1,
//   faculty: "Sabah"
// }
// //Student obyektinin sahələrini console-da çıxarmaq
// console.log(student.name, student.age,student.course,student.faculty)
//------------------------------------------------------------------------------

// Task2.Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.
  // const Object = {
  //   surname : "Abiyev",
  //   age : 30
  // }
  // // Orijinal obyekti yeni bir obyekt kimi kopyalaq
  // const copyObject ={...Object};
  // //Obyekti dəyişmək
  // Object.surname ="Mammadli";
  //  console.log("Object:", Object);
  //  console.log("CopyObject:", copyObject)
//------------------------------------------------------------------------------------------------------
 
//  Task3.1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
    //  const numbers ={
    //   1:'One',
    //   2:'Two',
    //   3:'Three',
    //   4:'Four',
    //   5:'Five',
    //   6:'Six',
    //   7:'Seven',
    //   8:'Eight',
    //   9: 'Nine',
    //   10: 'Ten'
    //  };
    //  for (let i = 1; i <= 10; i++) {
    //   console.log(`${i} - ${numbers[i]}`);
    //  }

//-----------------------------------------------------------------------------------------------------------
// Task4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.
// const person = {
//      name:"Saida",
//      surname:"Babazade"
// };
// function getFullName(person){
//      return person.name+ " "+person.surname;
//}
// console.log(getFullName(person));
//-------------------------------------------------------------------------------------------------------------------------------------

// Task5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.
//  const obj ={
//     name: "Aslan",
//     age: 30,
//     city:"Baku"
// };

// for(const key in obj){
//     console.log(`key: ${key}, value: ${obj[key]}`);
// }
//------------------------------------------------------------------------------------------------------------------------------------

//Task6.Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.

// const person ={
//     Name: "Turkane",
//     Surname: "Babazade",
// }

// function yoxla(obj,key)
// {
//     return key in obj;
// }

// console.log(yoxla(person,"Name"));
// console.log(yoxla(person,"Age"));
//-------------------------------------------------------------------------------------------------------------------------------

//Task7.dədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.
// const obj ={
//   a:5,
//   b:11,
//   c:4,
//   d:10
// }
// let sum=0;
// for(key in obj){
//   sum += obj[key];
// }
// console.log(sum)