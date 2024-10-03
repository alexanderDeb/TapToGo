import User from "../models/user.model.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Verificar que el correo y la contraseña estén presentes
  if (!email || !password) {
    return res.status(400).json({ message: "Correo y contraseña son requeridos" });
  }

  try {
    // Buscar el usuario por el correo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Correo o contraseña incorrectos" });
    }

    // Verificar si la contraseña es correcta
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Correo o contraseña incorrectos" });
    }

    // Si las credenciales son correctas, enviar el estado 201 autorizado
    return res.status(201).json({ message: "Login exitoso", user: { name: user.name, email: user.email, saldo: user.saldo } });
  } catch (error) {
    return res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
};

export const updateUserSaldo = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  const userSaldo = {
    name: user.name,
    email: user.email,
    password :user.password,
    rfid: user.rfid,
    saldo: user.saldo + req.body.saldo,
    status: user.status,
  };
  const userEdit = await User.findOneAndUpdate(query, userSaldo, {
    new: true,
  });
  if (!userEdit)
    return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(userEdit);
};

export const createUser = async (req, res) => {
  const { name, email, password, rfid, saldo, status } = req.body;

   // Validación simple para asegurar que se envíe una contraseña numérica de 4 dígitos
   if (!/^\d{4}$/.test(password)) {
    return res.status(400).json({ message: "La contraseña debe ser un número de 4 dígitos" });
  }

try{

  const NewUser = new User({
    name: name,
    email: email,
    password: password,
    rfid: rfid,
    saldo: saldo,
    status: status,
  });
  const saveUser = await NewUser.save();
  res.json(saveUser);
} catch (err) {
  res.status(500).json({ message: "Error al crear usuario", err });
}
};

export const spendSaldo = async (req, res) => {
  const query = { rfid: req.params.rfid };
  const user = await User.findOne(query);
  const userSaldo = {
    name: user.name,
    email: user.email,
    password:user.password,
    rfid: user.rfid,
    saldo: user.saldo - 2700,
    status: user.status,
  };
  if (userSaldo.saldo > -2700) {
    const userEdit = await User.findOneAndUpdate(query, userSaldo, {
      new: true,
    });
    if (!userEdit)
      return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(userEdit);
  } else {
    res.send("Te quedaste sin saldo!!");
  }
};
