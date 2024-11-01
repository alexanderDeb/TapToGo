import Station from "../models/station.model";

export const getStations = async (req, res) => {
  const stations = await Station.find();
  if (!stations)
    return res.status(404).json({ message: "No hay estaciones" });
  res.json(stations);
};

export const getStation = async (req, res) => {
  const station = await Station.findById(req.params.id);
  if (!station)
    return res.status(404).json({ message: "Estacion no encontrada" });
  res.json(station);
};

export const createStation = async (req, res) => {
  const { name, latitude, longitude, direction, status } = req.body;

  try {
    const NewStation = new Station({
      name: name,
      latitude: latitude,
      longitude: longitude,
      direction: direction,
      status: status,
    });
    const StationSave = await NewStation.save();
    res.json(StationSave);
  } catch (err) {
    res.status(400).json({ message: "Error al crear la estacion", err });
  }
};

export const deleteStation = async (req, res) => {
  const station = await Station.findByIdAndDelete(req.params.id);
  if (!station)
    return res.status(404).json({ message: "Estacion no encontrada" });
  res.json(station);
};
