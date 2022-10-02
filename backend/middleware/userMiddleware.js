exports.stringManup = (req, res, next) => {
  const birthDate = '10/05/1996';
  req.name = req.name + ', ' + 'birthDate'
  next()
}
