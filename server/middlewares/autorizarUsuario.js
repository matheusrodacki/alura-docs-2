import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
  const tokenJWT = socket.handshake.auth.token;

  try {
    const payload = jwt.verify(tokenJWT, process.env.SEGREDO_JWT);

    socket.emit("autorizacao_sucesso", payload);

    next();
  } catch (erro) {
    next(erro);
  }
}

export default autorizarUsuario;
