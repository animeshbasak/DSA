//What is DS?
// A collection of values that has relationship among them and relates to each other
// we can put things in DS and take things out of DS


const strings =
  ['a', 'b', 'c', 'd'];
//0   1     2     3
// during adding we have to shift the numbers 
// we have to loop around with everything to add
//4*4 16 bytes of storage
console.log(strings[2]) //0(1) operation
strings.push('e')
console.log(strings)
strings.pop();  // to remove 0(1) operation as well
console.log(strings)
// strings.unshift('x')//to add at start 0(n)
// console.log(strings)
strings.splice(2, 0, 'alien') // to add in between 0(n)
console.log(strings)
// strings.splice(2, 2, 'alien') // to add and delete in between 0(n)
// console.log(strings)


// static vs dynamic
// we need to allocate memory of array in static array like in c++ 
// but in js we have dynamic arrays and we dont need to allocate memeory


//Classes in JS
//referenc type

// Objects are called reference type
console.log([] === [])
console.log([1] === [1])


var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

console.log(object1 === object2)
console.log(object1 === object3)
console.log(object2 === object3)

object1.value = 15;
console.log(object1.value)
console.log(object2.value)
console.log(object3.value)

//context vs scope
//context tells u where we are in the object
function b() {
  let a = 4;
}
function a() {
  console.log(this)
}
a()

const object4 = {
  a: function () {
    console.log(this)
  }
}
object4.a()
console.log(this) // this refers to what object we are inside of
console.log(window)
console.log(this === window)

//instantiation -> means make a copy of an object and reuse the code
class Player {
  constructor(name, type) {
    console.log('player', this)
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`hi i am ${this.name}, i'm a ${this.type}`)
  }
}

class Wizard extends Player {// everytime we extend we need to call the constructor , we have to call the super which we needs to pass in constructor
  constructor(name, type) {
    super(name, type) // whenever we extend class we need to use super to have access to class properties
    console.log('wizard', this)
  }
  play() {
    console.log(`i am a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'healer') // new keyword means creating new Wizard
const wizard2 = new Wizard('Shawn', 'Dark Magic') // make an instance of wizard

wizard1.play()
wizard1.introduce()
wizard2.play()
wizard2.introduce()


//Build an array and implement it

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems()//methods are functions within a class
  {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1];
    this.length--
  }
}

// const newArr = new MyArray();
// console.log(newArr)
// console.log(newArr.get(0))
// console.log(newArr.push("hi"))
// console.log(newArr.push("!"))
// console.log(newArr.push("!"))
// console.log(newArr.delete(1))
// console.log(newArr)
// console.log(newArr.pop())
// console.log(newArr)


// QUes reverse a string
let str = 'Hi This is Animesh'
function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Not a string'
  }
  const backwards = [];
  const len = str.length - 1;
  for (let i = len; i >= 0; i--) {
    backwards.push(str[i])
  }
  return backwards.join('')
}
// console.log(str)
// console.log(reverse(str))


function reverse2() {
  return str.split('').reverse().join('')
}
// console.log(reverse2(str))

const reverse3 = str => str.split('').reverse().join('');
// console.log(reverse3(str))
const reverse4 = str => [...str].reverse().join('');
console.log('reverse4', reverse4(str))


// Merge sorted arrays

function mergeSortedArrays(arr1, arr2) {
  const mergeArray = []
  let arr1Item = arr1[0]
  let arr2Item = arr2[0]
  let i = 1;
  let j = 1;
  //check input
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }
  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item)
    if (!arr2Item || arr1Item < arr2Item) {
      mergeArray.push(arr1Item)
      arr1Item = arr1[i];
      i++;
    }
    else {
      mergeArray.push(arr2Item)
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergeArray;
}



const val = mergeSortedArrays([0, 31, 44], [4, 6, 30]);
console.log(val)