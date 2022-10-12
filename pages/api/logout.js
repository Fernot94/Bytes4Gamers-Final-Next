import { insertUser } from "../../src/backend-data/authentication";
import { addSession } from "../../src/backend-data/sessions";
import {
  getUserByEmail,
  getUserByUsername,
} from "../../src/backend-data/users";
import { validateFields } from "../../src/backend-services/validations";

export default async function handler(req, res) {
  if (req.method === "POST") {
    req.headers("");
    // quando fazemos o fetch temos de enviar o token com os headers para fazer logout, e todas as outras coisas

    deleteSession(user._id);

    res.status(200).json({ mensagem: "Sessão terminada." });
  }
}
