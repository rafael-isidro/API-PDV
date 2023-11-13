const nodemailer = require('nodemailer')
const ejs = require('ejs')
const fs = require('fs').promises

const compileHTML = async (templatePath, data) => {
  const template = await fs.readFile(templatePath, 'utf-8')
  const compiledHTML = ejs.render(template, data)
  return compiledHTML
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const enviarEmailConfirmacao = async (
  nomeCliente,
  pedido_id,
  emailCliente,
  dadosProdutos
) => {
  const html = await compileHTML('./src/templates/email.html', {
    nomeCliente,
    pedido_id,
    dadosProdutos,
  })
  try { 
    await transporter.sendMail(
      {
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
        to: `${nomeCliente} <${emailCliente}>`,
        subject: `Pedido efetuado com sucesso!`,
        html,
      })
  } catch (error) {
      console.log(error.message)
      console.error( "Erro ao enviar e-mail" )
  }
}

module.exports = {
  transporter,
  compileHTML,
  enviarEmailConfirmacao,
}
