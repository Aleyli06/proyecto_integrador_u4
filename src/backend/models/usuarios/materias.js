import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  hecho: {
    type: Boolean,
    default: false,
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: "tareas" 
});

export default mongoose.model("Tarea", tareaSchema);