import { insertUser } from "../../src/backend-data/authentication";
import { addSession } from "../../src/backend-data/sessions";
import { getUserByEmail, getUserByUsername } from "../../src/backend-data/users";
import { validateFields } from "../../src/backend-services/validations";

export default async function handler(req, res) {
  if (req.method === "POST") {
    
    req.headers("")

    deleteSession(user._id)

    res.status(200)
      .json({ "mensagem": "Sessão terminada." })
  }
}
