let name = "Reddy"

let iterator = name[Symbol.iterator]();
while(true){
    let res = iterator.next();
    if(res.done) break;
    console.log(res.value)
}


let str ="Bhajarangi";

for(let char of str){
    console.log('char:', char)
    //B h a j a r a n g i
}