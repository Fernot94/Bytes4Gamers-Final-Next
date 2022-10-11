import { insertUser } from "../../src/backend-data/authentication";
import { getUserByEmail, getUserByUsername } from "../../src/backend-data/users";
import { validateFields } from "../../src/backend-services/validations";

export default async function handler(req, res) {
  if (req.method === "POST") {

    const {
      usernameOrEmail,
      password
    } = req.body
    console.log(usernameOrEmail)
    const userByUsername = await getUserByUsername(usernameOrEmail)
    const userByEmail = await getUserByEmail(usernameOrEmail)
    let user = null

    if (!userByEmail && !userByUsername) {
      return res
        .status(404)
        .json({
          "message": "O utilizador não foi encontrado!"
        })
    }
    if (!userByEmail)
      user = userByUsername
    else
      user = userByEmail

    if (user.password !== password) {
      return res
        .status(401)
        .json({
          "message": "A password introduzida é inválida!"
        })
    }
    res.status(200).json({ status: "logou" })
 /*    const token = await addSession(user._id)
    res.status(200)
      .json({ token }) */
  }
}
