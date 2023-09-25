const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => {
  alert("Cadastrado com sucesso!");
  window.location.href = "/login/index.html";
});

socket.on("cadastro_error", () => {
  alert("Erro no cadastro!");
});

socket.on("usuario_existente", () => {
  alert("Usuário já cadastrado!");
});

export { emitirCadastrarUsuario };
