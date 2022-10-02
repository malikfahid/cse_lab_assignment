const jwt = require('jsonwebtoken')
const generateToken = () => {
  return jwt.sign({ name: 'Md. Zarif Hossain', age: 25 }, '2r4u7x!A%D*G-KaP', {
    expiresIn: '15d',
  })
}
module.exports = generateToken
