import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJWT) => {
  definirCookie("tokenJWT", tokenJWT);
  window.location.href = "/";
});

socket.on("autenticacao_erro", () => alert("Usuário ou Senha Incorreta!"));

export { emitirAutenticarUsuario };
