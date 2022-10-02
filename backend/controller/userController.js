const generateToken = require('../utils/genToken')

exports.getUser = (req, res, next) => {
  var x = 5
  var y = 6

  const mul = x * y

  console.log(req.father)
  const token = generateToken()

  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
  })

  res.json({
    status: 'Done',
    UNI: 'Islamic university of technology (IUT)',
  })
}

exports.getParents = (req, res, next) => {
  var x = 5
  var y = 6

  req.father = 'Abul Kalam Azad'

  next()
}

exports.verifyToken = () => {
  const token = []
  const decoded = jwt.verify(token, '2r4u7x!A%D*G-KaP')
}
