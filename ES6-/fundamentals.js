let persons = [
    {
        name: 'Eyad',
        age: 31
    },
    {
        name: 'Fadil',
        age: 29
    },
    {
        name: 'momma',
        age: 27
    }
]

let reducer = ((acc, cur) => acc + cur)


let ageOver27 = persons
.filter(person => person.age > 27)
.map((person) => person.age)
.reduce(reducer)

console.log('The total years of this persons is', ageOver27)