const {
  listarCategoriasRepositorio,
  detalharCategoriaRepositorio,
} = require('./categoria.repositorios')
const {
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
} = require('./usuario.repositorios')
const {
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  verificarProdutoEmPedidoRepositorio,
} = require('./produto.repositorios')

const {
  cadastrarClienteRepositorio,
  detalharClienteEmail,
  detalharClienteCpf,
  editarClienteRepositorio,
  clientePorIdRepositorio,
  detalharClienteRepositorio,
  listarClientesRepositorio,
  filtrarClienteRepositorio,
} = require('./cliente.repositorios')
const {
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio
} = require('./pedido.repositorios')
module.exports = {
  listarCategoriasRepositorio,
  detalharCategoriaRepositorio,
  usuarioPorEmailRepositorio,
  usuarioPorIdRepositorio,
  cadastrarUsuarioRepositorio,
  editarUsuarioRepositorio,
  cadastrarProdutoRepositorio,
  detalharProdutoRepositorio,
  listarProdutoRepositorio,
  editarProdutoRepositorio,
  deletarProdutoRepositorio,
  cadastrarClienteRepositorio,
  detalharClienteEmail,
  detalharClienteCpf,
  editarClienteRepositorio,
  clientePorIdRepositorio,
  detalharClienteRepositorio,
  listarClientesRepositorio,
  filtrarClienteRepositorio,
  verificarProdutoEmPedidoRepositorio,
  cadastrarPedidoRepositorio,
  cadastrarProdutoPedidoRepositorio,
  listarPedidosRepositorio,
  filtrarPedidoRepositorio,
  filtrarProdutoPedidoRepositorio
}
