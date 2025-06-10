import { Sequelize } from "sequelize";

const db = new Sequelize('pintukeluar', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

// try {
//     await db.authenticate();
//     console.log("Database Connected...");
//   } catch (error) {
//     console.error("Database Connection Error:", error);
//   }

// export default db;
async function connectDB() {
  try {
    await db.authenticate();
    console.log("Database Connected...");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
}

connectDB(); // Panggil fungsi untuk koneksi

export default db;
