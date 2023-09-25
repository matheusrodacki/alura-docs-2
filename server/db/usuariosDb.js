import criaHashESalSenha from "../utils/hash.js";
import { usuariosColecao } from "./dbConnect.js";

async function encontrarUsuario(usuario) {
  const usuarioEncontrado = await usuariosColecao.findOne({ usuario });
  return usuarioEncontrado;
}

async function cadastrarUsuario({ usuario, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return await usuariosColecao.insertOne({ usuario, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
