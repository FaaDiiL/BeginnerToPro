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

let msgFromStore = fruitBag.map(([fruit, amount], i) => fruit + ' ' + amount + ' ' + 'index ' + (i + 1)  )
let msgFromStoreToObj = fruitBag.map(([fruit, amount], i) => {

    return {
          id:i+1,
          fruitType: fruit,
          amount: amount,
     }
})


console.log(msgFromStore)
msgFromStoreToObj.filter((fruits => console.log(fruits.fruitType)))

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