let user = {
  age: 54,
  name: "kyie",
  magic: true,
  scream: function () {
    // console.log('ahhhhhhhh')
  }
}

console.log(user.age) // 0(1)
// user.spell = 'abra ka dabra' // 0(1)
console.log(user.spell)
user.scream() //0(1)


///collisions

// when two data use the same address space in hash it results in hash collisions 
//it slows down reading and writing ability with 0(n)
// two common ways to deal with is linked list or separate chaining etc


// Map and Sets
// Map
// const a = new Map() // diff is it allows to save any ds as a key (function, string number etc) also it maintains insertion order
// const b = new Sets()


//Implementing a hash table
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) { //0(1)
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
      console.log(hash)
    }
    return hash;
  }
  set(key, value) { //0(1)
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
    return this.data;
  }
  get(key) { //0(1)
    let address = this._hash(key);
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }//0(i)
      return undefined;
      // console.log(nothing)
    }
  }
  // keys() {
  //   const keysArray = [];
  //   for (let i = 0; i < this.data.length; i++) {
  //     if (this.data[i]) {
  //       keysArray.push(this.data[i][0][0])
  //     }
  //   }
  //   return keysArray;
  // }

  //without collision
  keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result;
  }
}
const myHashTable = new HashTable(400)
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 100)
// myHashTable.get('grapes')
// console.log(myHashTable.get('apples'))
// // myHashTable._hash('grapes')
myHashTable.keys()
console.log(myHashTable.keys())


//Google QUestion
// Given an array give us the first recurring character
// Given an array =[2,5,1,2,3,5,1,2,4];
// it should return 2
// Given an array =[2,1,1,2,3,4,1,2,4];
// it should return 1
// Given an array = [2,3,4,5]
// it should return undefined


function firstRecurCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; i < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}//O(n^2)
// console.log(firstRecurCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
function firstRecurCharacter2(input) {
  let map = [];
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    }
    else {
      map[input[i]] = i
    }
    // console.log(map)
  }
  return undefined
}//O(n)
console.log(firstRecurCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))