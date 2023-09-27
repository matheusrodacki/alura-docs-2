import "dotenv/config";
import registrarIndex from "./controllers/indexController.js";
import registrarDocumento from "./controllers/documentoController.js";
import registrarCadastro from "./controllers/cadastroController.js";
import registrarLogin from "./controllers/loginController.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

io.use(autorizarUsuario);

io.on("connection", (socket) => {
  registrarIndex(socket, io);
  registrarDocumento(socket, io);
  registrarCadastro(socket, io);
  registrarLogin(socket, io);
});
