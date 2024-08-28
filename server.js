const Express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = Express();
app.use(cors());
app.use(Express.json());

const CONNECTION_STRING = "mongodb+srv://admin:2CMjmwyFduwLP6eQ@centromedico.d55kl.mongodb.net/?retryWrites=true&w=majority&appName=centroMedico";
const DATABASENAME = "centroMedico_1";

mongoose.connect(CONNECTION_STRING, {
  dbName: DATABASENAME
}).then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// Routes
const getNotes = require("./routes/getNotes");
const postNotes = require("./routes/postNotes");

app.use("/api/centroMedico_1/GetNotes", getNotes);
app.use("/api/centroMedico_1/AddNotes", postNotes);

const PORT = process.env.PORT || 5038;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
