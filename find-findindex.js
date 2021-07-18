/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. 
The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 
*/
const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' },
]

// console.log(findUserByUsername(users, 'mlewis')) // {username: 'mlewis'}
// console.log(findUserByUsername(users, 'taco')) // undefined

function findUserByUsername(usersArray, username) {
  return usersArray.find((user) => {
    return user.username === username
  })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. 
The function should remove the object from the array and return the object. 
If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  let output = ''
  let userTo86Id = usersArray.findIndex((user) => {
    return user.username === username
  })
  if (userTo86Id !== -1) {
    output = usersArray[userTo86Id]
    usersArray.splice(userTo86Id, 1)
    return output
  }
  return undefined
}
