const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
  let token = ''
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, 'secreto_secretoso')
  } catch { }

  if (!token || !decodedToken.id) {
    return response.status(401).json({
      erro: 'token missing or invalid'
    })
  }

  const { id: userId } = decodedToken
  request.userId = userId
  next()
}
