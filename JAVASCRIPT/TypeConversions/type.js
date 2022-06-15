//String Conversion
//String conversion happens when we need the string form of a value.
let number = 100;
console.log('befor:', typeof number)
 number = String(number);
 console.log('after:', typeof number)
 
 //output 
 /*
 befor: number
 after: string
 */



 //Numeric Conversion

 //Numeric conversion happens in mathematical functions and expressions automatically.
// to achive this we have to use Number keyword
 let str = "123";

 console.log('befor:', typeof str) // string

 let num = Number(str);

 console.log('after:', typeof str) // Number

 // other import convertion value

 // undefined --> NaN
 // null --> 0
 // true --> 1;
 // false --> 0;

 // if we try to convert string we have to make sure that that string only contains numeric characters otherwise
 Number('7888hh') // NaN


 //if we use parseInt keyword
 parseInt("7488447hh")  // 7488447

 // if we use parseFloat keyword

 console.log(parseFloat("7747.444Hjk"))  // 7747.444

 // we have to make sure that that string must be start with numeric character otherwise
 console.log(parseFloat("_7747.444Hjk"))  // NaN
