import mongoose from "mongoose";

const backendSchema = new mongoose.Schema({
  nombre:   { type: String, required: true },
  creadoEn: { type: Date,   default: Date.now },
}, {
  collection: 'tareas' 
});

export const Backend = mongoose.model('Backend', backendSchema);

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://lxrdszn:bcb96dbdb1@cluster77378.iksnsto.mongodb.net/proyectointegrador?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Conectado correctamente a MongoDB Atlas (proyectointegrador)");
  } catch (error) {
    console.error("❌ Error conectando a MongoDB Atlas:", error.message);
  }
};

export default connectDB;
