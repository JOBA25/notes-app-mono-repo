const ERROR_HANDLERS = {
  CastError: response => 
    response.status(400).send({ error: 'id used is malformed' }),

  ValidationError: (response, error) =>
    response.status(409).send({
      error: error.message }),

  JsonWebTokenError: (response) =>
    response.status(401).json({
      error: 'token missing or invalid'}),

  TokenExpirerError: res => 
    res.status(401).json({ error: 'token expired'}),

  defaultError: res => res.status(500).end()
}

module.exports = (error, request, response, next) => {
  console.error(error.name)
  const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.defaultError
  handler(response, error)
}
