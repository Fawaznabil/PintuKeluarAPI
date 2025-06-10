import express from "express";
import { getUsers, getUserById, register, getRegister, login, resetPassword } from "../controllers/UserController.js";
import { createLayanan, getAllLayanan, getAllpilihlayanan, getLayananById, tambahpilihlayanan, tambahproduk, getAllproduk, tambahprodukdetail, getAllprodukdetail, tambahprodukmerek, getAllprodukmerek, tambahpilihpsikologdokter, getAlldokterpsikolog, tambahdurasi, getAlldurasi, tambahbooking, getAllbooking } from "../controllers/produkController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

router.post('/register', register);
router.get('/getregister', getRegister);
router.post('/login', login);
router.post("/reset-password", resetPassword); // Reset password user

router.post('/layanan', createLayanan);
router.get("/getlayanan", getAllLayanan);
router.get("/layanan/:id", getLayananById);

router.post("/pilihlayanan", tambahpilihlayanan);
router.get("/getpilihlayanan", getAllpilihlayanan);

router.post("/tambahproduk", tambahproduk);
router.get("/getproduk", getAllproduk);

router.post("/tambahprodukdetail", tambahprodukdetail);
router.get("/getprodukdetail", getAllprodukdetail);

router.post("/tambahprodukmerek", tambahprodukmerek);
router.get("/getprodukmerek", getAllprodukmerek);

router.post("/tambahpilihdokterpsikolog", tambahpilihpsikologdokter);
router.get("/getpilihdokterpsikolog", getAlldokterpsikolog);

router.post("/tambahdurasi", tambahdurasi);
router.get("/getdurasi", getAlldurasi);

router.post("/tambahbooking", tambahbooking);
router.get("/getbooking", getAllbooking);

export default router;