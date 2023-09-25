import jwt from "jsonwebtoken";

function gerarJWT(payload) {
  const tokenJWT = jwt.sign(payload, "segredosupersecreto", {
    expiresIn: "1h",
  });
  return tokenJWT;
}

export default gerarJWT;
