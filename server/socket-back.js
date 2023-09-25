import io from "./server.js";
import registrarIndex from "./registrarEventos/registrarIndex.js";
import registrarDocumento from "./registrarEventos/regristrarDocumento.js";
import registrarCadastro from "./registrarEventos/registrarCadastro.js";

io.on("connection", (socket) => {
  registrarIndex(socket, io);
  registrarDocumento(socket, io);
  registrarCadastro(socket, io);
});
