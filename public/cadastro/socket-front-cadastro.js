const socket = io();

function emitirCadastrarUsuario() {
  socket.emit("cadastrar_usuario", dados);
}

export { emitirCadastrarUsuario };
