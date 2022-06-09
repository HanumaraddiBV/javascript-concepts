// Rest parameter
// with help of this operator we can get all the remaining elements
// for example

function product(...args) { 
    let product = 1;
  
    for (let arg of args) {
        product *= arg
    }
  
    console.log(product)
  }

  product(2,3,4,6,6);


  // we have to make sure that The rest parameters must be at the end



  //Spread syntax
  // The spread syntax internally uses iterators to gather elements, the same way as for..of does.
  //The spread syntax works only with iterables.

  let users = ["Ravi","Raju","Mohan"];

  console.log(...users) //   Ravi Raju Mohan

  let name = "reddy";
  console.log(...name)  //r e d d y