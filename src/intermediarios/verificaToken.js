const { verify } = require('jsonwebtoken')
const { Erro } = require('../erros')

const verificaToken = (req, res, next) => {
  const estaAutenticado = req.headers.authorization

  if (!estaAutenticado) {
    throw new Erro('Para usar essa rota é necessário estar logado.', 403)
  }

  const token = estaAutenticado.split(' ')[1]

  const usuarioDecodificado = verify(
    token,
    process.env.SECRET_KEY,
    (erro, usuario) => {
      if (erro) {
        if (erro.name === 'TokenExpiredError') {
          throw new Erro('Token expirado, faça login novamente.', 403)
        } else {
          throw new Erro('Token inválido', 403)
        }
      }
      return usuario
    }
  )

  res.locals.usuarioDecodificado = usuarioDecodificado

  return next()
}

module.exports = verificaToken
