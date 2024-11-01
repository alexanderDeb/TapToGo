import User from "../models/user.model.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Verificar que el correo y la contraseña estén presentes
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Correo y contraseña son requeridos" });
  }

  try {
    // Buscar el usuario por el correo
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    // Verificar si la contraseña es correcta
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    // Si las credenciales son correctas, enviar el estado 201 autorizado
    return res.status(201).json({
      message: "Login exitoso",
      user: {
        name: user.name,
        email: user.email,
        saldo: user.saldo,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: "Error al iniciar sesión", error });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const query = { email: req.params.email };
  const user = await User.findOne(query);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const updateUserSaldo = async (req, res) => {
  const query = { email: req.params.email };
  const user = await User.findOne(query);
  if (user) {
    // Actualiza el saldo
    user.saldo += req.body.saldo;

    // Agrega la nueva transacción
    user.transactions.push({ Recarga: req.body.saldo });

    // Guarda los cambios en la base de datos
    await user.save();

    console.log(req.body.saldo);
    console.log(user.transactions);
    res.status(200).json({ message: "Se actualizo el saldo exitosamente" });
  } else {
    res.status(400).json({ message: "Hubo un error al actualizar el saldo" });
  }
};

export const createUser = async (req, res) => {
  const { name, email, password, rfid, saldo, status, role } = req.body;

  // Validación simple para asegurar que se envíe una contraseña numérica de 4 dígitos
  if (!/^\d{4}$/.test(password)) {
    return res
      .status(400)
      .json({ message: "La contraseña debe ser un número de 4 dígitos" });
  }

  try {
    const NewUser = new User({
      name: name,
      email: email,
      password: password,
      rfid: rfid,
      saldo: saldo,
      status: status,
      role: role,
    });
    const saveUser = await NewUser.save();
    res.json(saveUser);
  } catch (err) {
    res.status(400).json({ message: "Error al crear usuario", err });
  }
};

export const spendSaldo = async (req, res) => {
  const query = { email: req.params.email };
  const user = await User.findOne(query);

  if (user) {
    // Verifica si el saldo es suficiente para restar 2700
    if (user.saldo - 2700 >= -2700) {
      // Resta 2700 al saldo
      user.saldo -= 2700;

      // Agrega la nueva transacción
      user.transactions.push({ Descuento: 2700 });

      // Guarda los cambios en la base de datos
      await user.save();

      console.log("Saldo actualizado:", user.saldo);
      console.log("Transacciones:", user.transactions);
      res.status(200).json({ message: "Se desconto el saldo" });
    } else {
      // Responde con un mensaje de error si no hay saldo suficiente
      return res.status(400).json({ message: "No hay saldo suficiente" });
    }
  } else {
    console.log("Usuario no encontrado");
    return res.json({ message: "Usuario no encontrado" });
  }
};

export const updateUser = async (req, res) => {
  const query = { email: req.params.email };
  const { status } = req.body;
  const userquery = await User.findOne(query);
  const userStructure = {
    name: userquery.name,
    email: userquery.email,
    password: userquery.password,
    rfid: userquery.rfid,
    saldo: userquery.saldo,
    status: status,
    role: userquery.role,
  };
  const user = await User.findByIdAndUpdate(userquery._id, userStructure, {
    new: true,
  });
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};
