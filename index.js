import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/database.js";
import "./models/associations.js"; // Impor asosiasi setelah model diekspor

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
// app.use(express.json()); // Pastikan middleware ini ada untuk parsing JSON

(async () => {
    try {
      await db.authenticate();
      console.log("Database Connected...");
  
      await db.sync(); // Membuat tabel jika belum ada
      console.log("User table created successfully");
    } catch (error) {
      console.error("Connection Error:", error);
    }
  })();

app.listen(5000, ()=> console.log('Server up and running...'));