const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}
function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexoesSalvas) => conexoesSalvas.nomeDocumento === nomeDocumento)
    .map((conexoesSalvas) => conexoesSalvas.nomeUsuario);
}

export { adicionarConexao, obterUsuariosDocumento };
