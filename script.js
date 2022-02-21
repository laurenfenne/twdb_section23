// ****** DEFAULT PARAMS *******

//old way
function rollDie(numSides) {
   if(numSides === undefined) {
       numSides = 6
   }
   return Math.floor(Math.random() * numSides) + 1
}

// new way
function rollDieNew(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
 }

 //another example in which we learn that default params come last
function greet(person, msg = "Hey there", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}

greet("Lauren", "Hello")


// ****** SPREAD ******

// takes an iterable (e.g. arrays, strings) and puts all the data into separate variables
// eg these accept separate variables but not an array:
Math.max(13, 4, 5, 6, 13235, 42632, 3432, 0)
Math.min(3, 284, 69333)

const nums = [13, 4, 5, 6, 13235, 42632, 3432, 0]
//fails :(((
Math.max(nums)

// so we use "..." to create a 'spread' of variables from the array!
console.log(Math.max(...nums))
console.log(Math.min(...nums))

// another example- look at the diffence between console logging an array and a spread of the array
console.log(nums)
console.log(...nums)

//Anything we can iterate over with for-of can be spread, like strings:
console.log("Hello")
console.log(..."Hello")
// This is spreading into functions

// Regarding array literals...
// We can spread iterables into arrays!
const cats = ["Deana", "Mylo", "Luna"]
const dogs = ["Dally", "Kira"]

const allPets = [...dogs, ...cats, "Murphy"]
console.log(...allPets)

// Now, spread in object literals!
const feline = {legs: 4, family: "Felidae"}
const canine = {isFurry: true, family: "Caninae"}

// family will revert to last value
const catDog = {...canine, ...feline}
//note that a ... would not work here
console.log(catDog)

// and we can do
console.log({...feline, colour: "Black"})

//another useful example
const dataFromForm = {
    email: 'lauren.ffen@gmail.com',
    password: '12345',
    username: 'lffen'
}

//want to add extra variables, so make a copy using spread and add them in
const newUser = {...dataFromForm, id: 2345, isAdmin: false}
console.log(newUser)



/// ******* REST PARAMS *******
