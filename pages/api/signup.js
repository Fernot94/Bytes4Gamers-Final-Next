app.post("/signup", async (req, res) => {
  const {
    email,
    password,
    passwordConfirmation,
    acceptsTerms,
    acceptsCommunications,
  } = req.body;

  const validation = await validateFields(req.body);
  if (validation.success) {
    const id = await addUser({
      email,
      password,
      passwordConfirmation,
      acceptsTerms,
      acceptsCommunications,
    });
    res.status(201).json({
      message: "Utilizador Criado com Sucesso!",
      _id: id,
    });
  } else {
    res.status(400).json({
      message: "Os dados introduzidos não são válidos.",
      errors: validation.errors,
    });
  }
});