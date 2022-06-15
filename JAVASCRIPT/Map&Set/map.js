// Map
//Map is a collection of keyed data items, just like an Object

//creating map
let map = new Map();


//setting key and values
// we can set any type of keys in map

map.set('name',"Reddy")
map.set(1,"24")
console.log(
map.get(1))


// we can create map using Object.entries

let obj = {
    colour:"White",
    size:34
}

let exa = new Map(Object.entries(obj))
console.log('exa:', exa)



// Set
//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

//Methods of set
// 1. set.add(value)
// 2. set.delete(value)
// 3. set.has(value)
// 4. set.clear()
// 1. set.size



let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);

// if we again set the same key it deosent
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}