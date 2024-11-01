import mongoose from "mongoose";

const stationSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    latitude: { type: mongoose.Decimal128, require: true },
    longitude: { type: mongoose.Decimal128, required: true },
    direction: { type: String, require: true },
    status: { type: String, require: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Station", stationSchema);
