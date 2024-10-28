import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, required: true },
    status: { type: Boolean, require: false, default: true },
    role: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

// Método para encriptar la contraseña antes de guardarla
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Método para comparar la contraseña ingresada con la contraseña encriptada
adminSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("Admin", adminSchema);
