let user = {
  age: 54,
  name: "kyie",
  magic: true,
  scream: function () {
    console.log('ahhhhhhhh')
  }
}

console.log(user.age) // 0(1)
user.spell = 'abra ka dabra' // 0(1)
console.log(user.spell)
user.scream() //0(1)


///collisions

// when two data use the same address space in hash it results in hash collisions