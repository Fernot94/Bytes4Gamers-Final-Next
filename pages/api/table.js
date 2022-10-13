import { insertUser } from "../../src/backend-data/authentication";
import { addTable, getTableById } from "../../src/backend-data/tables";
import { validateFields } from "../../src/backend-services/validations";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = await addTable(req.body)
    res.status(201).json({
      message: "Table created successfully!",
      _id: id,
    })
  }
  else if (req.method === "GET") {
  const table = await getTableById(req.headers.id);
  console.log(table)
    return res.status(200).json({ table: table });
  }
}