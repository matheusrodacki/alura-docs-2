import "dotenv/config";
import io from "./server.js";
import registrarIndex from "./controllers/indexController.js";
import registrarDocumento from "./controllers/documentoController.js";
import registrarCadastro from "./controllers/cadastroController.js";
import registrarLogin from "./controllers/loginController.js";

io.on("connection", (socket) => {
  registrarIndex(socket, io);
  registrarDocumento(socket, io);
  registrarCadastro(socket, io);
  registrarLogin(socket, io);
});
