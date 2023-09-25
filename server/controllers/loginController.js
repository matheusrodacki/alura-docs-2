import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJWT from "../utils/gerarJWT.js";

function registrarLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ usuario, senha }) => {
    const usuarioEncontrado = await encontrarUsuario(usuario);

    if (usuarioEncontrado) {
      const usuarioAutenticado = await autenticarUsuario(
        senha,
        usuarioEncontrado
      );

      if (usuarioAutenticado) {
        const tokenJWT = gerarJWT({ nomeUsuario: usuario });
        console.log(tokenJWT);

        socket.emit("autenticacao_sucesso");
      } else {
        socket.emit("autenticacao_erro");
      }
    } else {
      socket.emit("autenticacao_erro");
    }
  });
}
export default registrarLogin;
