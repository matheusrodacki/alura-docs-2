import io from "./server.js";
import registrarIndex from "./controllers/indexController.js";
import registrarDocumento from "./controllers/documentoController.js";
import registrarCadastro from "./controllers/cadastroController.js";

io.on("connection", (socket) => {
  registrarIndex(socket, io);
  registrarDocumento(socket, io);
  registrarCadastro(socket, io);
});
