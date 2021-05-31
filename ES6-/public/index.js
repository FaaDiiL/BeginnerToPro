let bodyBox = document.getElementById('root')
let list = document.createElement('ul')
let listItem = document.createElement('li')


bodyBox.innerHTML = '<h1>Hello world!</h1>'
bodyBox.appendChild(list)
list.appendChild(listItem)
listItem.innerText = 'first item'

list.classList='remove-dots'