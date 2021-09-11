import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Albus Dumbeldore',
    email: 'albus@gmail.com',
    password: bcrypt.hashSync('50pointstogryfindor', 10),
    isAdmin: true,
  },
  {
    name: 'Harry Potter',
    email: 'harry@gmail.com',
    password: bcrypt.hashSync('killvoldemort', 10),
  },
  {
    name: 'Tom Riddle',
    email: 'darklord@gmail.com',
    password: bcrypt.hashSync('killharry', 10),
  },
]

export default users
