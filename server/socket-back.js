import "dotenv/config";
import registrarIndex from "./controllers/indexController.js";
import registrarDocumento from "./controllers/documentoController.js";
import registrarCadastro from "./controllers/cadastroController.js";
import registrarLogin from "./controllers/loginController.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspAreaLogada = io.of("/areaLogada");

nspAreaLogada.use(autorizarUsuario);

nspAreaLogada.on("connection", (socket) => {
  registrarIndex(socket, nspAreaLogada);
  registrarDocumento(socket, nspAreaLogada);
});

io.of("/").on("connection", (socket) => {
  registrarCadastro(socket, io);
  registrarLogin(socket, io);
});
