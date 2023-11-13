const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.ENDPOINT_BACKBLAZE)

const s3 = new aws.S3({
  endpoint,
  credentials: {
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.APP_KEY,
  },
})

const enviarImagem = async (path, buffer, mimetype) => {
  const imagem = await s3
    .upload({
      Bucket: process.env.BUCKET_NAME,
      Key: path,
      Body: buffer,
      ContentType: mimetype,
    })
    .promise()

  return {
    path: imagem.Key,
    url: `https://${process.env.BUCKET_NAME}.${process.env.ENDPOINT_BACKBLAZE}/${imagem.Key}`,
  }
}

const excluirImagem = async (path) => {
  try {
    await s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: path,
      })
      .promise()
  } catch (error) {
    console.error(`Ocorreu um erro ao excluir a imagem ${path}: ${error}`)
  }
}

module.exports = {
  enviarImagem,
  excluirImagem,
}
