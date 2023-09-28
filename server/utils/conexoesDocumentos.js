const conexoesDocumentos = [];

function adicionarConexao(conexao) {
  conexoesDocumentos.push(conexao);
}
function obterUsuariosDocumento(nomeDocumento) {
  return conexoesDocumentos
    .filter((conexoesSalvas) => conexoesSalvas.nomeDocumento === nomeDocumento)
    .map((conexoesSalvas) => conexoesSalvas.nomeUsuario);
}

function removerConexao(nomeDocumento, nomeUsuario) {
  const indice = conexoesDocumentos.findIndex((conexoesSalvas) => {
    return (
      conexoesSalvas.nomeDocumento === nomeDocumento &&
      conexoesSalvas.nomeUsuario === nomeUsuario
    );
  });

  if (indice !== -1) {
    conexoesDocumentos.splice(indice, 1);
  }
}

export { adicionarConexao, obterUsuariosDocumento, removerConexao };
