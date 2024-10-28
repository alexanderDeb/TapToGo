import Admin from "../models/admin.model.js";

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  // Verificar que el correo y la contraseña estén presentes
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Correo y contraseña son requeridos" });
  }

  try {
    // Buscar el usuario por el correo
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    // Verificar si la contraseña es correcta
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Correo o contraseña incorrectos" });
    }

    // Si las credenciales son correctas, enviar el estado 201 autorizado
    return res.status(200).json({
      message: "Login exitoso",
      admin: { name: admin.name, email: admin.email, role: admin.role },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al iniciar sesión", error });
  }
};

export const getAdmins = async (req, res) => {
  const admin = await Admin.find();
  res.json(admin);
};

export const getAdmin = async (req, res) => {
  const query = { email: req.params.email };
  const admin = await Admin.findOne(query);
  if (!admin) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(admin);
};

export const registerAdmin = async (req, res) => {
  const { name, email, password, status, role } = req.body;

  // Validación simple para asegurar que se envíe una contraseña numérica de 4 dígitos
  if (!/^\d{4}$/.test(password)) {
    return res
      .status(400)
      .json({ message: "La contraseña debe ser un número de 4 dígitos" });
  }

  try {
    const NewAdmin = new Admin({
      name: name,
      email: email,
      password: password,
      role: role,
      status: status,
    });
    const saveAdmin = await NewAdmin.save();
    res.json(saveAdmin);
  } catch (err) {
    res.status(500).json({ message: "Error al crear usuario", err });
  }
};
