const jwt = require('jsonwebtoken')
const generateToken = () => {
  return jwt.sign({ name: 'Malik Fahid', age: 25 }, '2r4u7x!A%D*G-KaP', {
    expiresIn: '10d',
  })
}
module.exports = generateToken
