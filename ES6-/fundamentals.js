// Typical Function
function Hello() {
    
    
}

// ArrorFunction 
const Helleo = (name, lastName) => {
     return name + '' + lastName

}

// ArrorFunction ShortHAnd
const Hellleo = name => name

// anonymous Function ShortHAnd
// (props)=>{return props}



// let person = ['Eyad','Fadil','Momma']
// let personInfo = [['Eyad', 30], ['Fadil', 28], ['Momma', 26]]
let fruitBag = [['banana', 23], ['strawberry', 30 ], ['Kiwi', 15]]

// let msgFromStore = fruitBag.map(([fruit, amount], i) => fruit + ' ' + amount + ' ' + 'index ' + (i + 1)  )
let msgFromStoreToObj = fruitBag.map(([fruit, amount], i) => (
     {
          id:i+1,
          fruitType: fruit,
          amount: amount,
     }
))


// console.log('msgFromStore: ', msgFromStore)
let myFruits = msgFromStoreToObj.map(({fruitType}) => ({fruitType}))
console.log('myFruits ',myFruits)


let users = [
     {name: 'user1', score: 100, level: 5}, 
     {name: 'user2', score: 600, level: 45}, 
     {name: 'user3', score: 300, level: 15}
]
let userNames = users.map(({name}) => {return {name}} )
let userInfo = users.map((user) => {return {user}} )

let userInfoo = users.map(({name,score,level}) => {return [`Player Name: ${name}, Score: ${score}, Level: ${level}`]} )
let scores = users.map(({score}) => {return score} )

let userInfoos = users.filter((user) => {
          return user.score >= 300
})
console.log(userNames)
console.log(userInfo)
console.log('test: ',userInfoos)


// names.map(function (name) { console.log(`This is a Normal function: ${name}`)})

// Göra om en array till ett object
// let writeMyName = personInfo.map(([name,age],i) =>{return {id: i, name: name, age: age}})
// console.log(writeMyName)

// let objEntries = Object.entries(writeMyName[0])
// let objKeys = Object.keys(writeMyName[0])
// let objValues = Object.values(writeMyName[0])
// console.log(`Object.entries`, objEntries)
// console.log(`Object.keys `,objKeys)
// console.log(`Object.values `,objValues)

let employees = [
     {name: 'Khaled', age: 34, salary:24000, city: 'Lissabon', soldItems: 10},
     {name: 'Bright', age: 41, salary:27000, city: 'Berlin', soldItems: 25},
     {name: 'Fanny', age: 23, salary: 18000, city: 'Stockholm', soldItems: 15},
     {name: 'Morgan', age: 41, salary:35000, city: 'Norge', soldItems: 20},
   
]

let employeesAge = employees.filter(({age, salary}) => age === 41 && salary === 35000) 
console.log(employeesAge)

let bonus = employees.map(({ name, age, salary, city, soldItems},i) => {
     
     if(soldItems > 1 && soldItems <11) { 
          return {name, age, salary: salary + 10, city, soldItems,  BonusMsg: `You sold ${soldItems} items, thats $10 in bonus!`}
     }
     if(soldItems > 10 && soldItems <16) { 
          return {name, age, salary: salary + 15, city, soldItems,  BonusMsg: `You sold ${soldItems} items, thats $15 in bonus!`}
     }

     if(soldItems > 15 && soldItems <21) {
          return {name, age, salary: salary + 25, city, soldItems,  BonusMsg: `You sold ${soldItems} items, thats $25 in bonus!`}
     }
     if(soldItems > 20 && soldItems <30) {
          return {name, age, salary: salary + 40, city, soldItems,  BonusMsg: `You sold ${soldItems} items, thats $40 in bonus!`}
     }
})

console.log('bonus',bonus)