import User from "../models/user.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// Fungsi untuk Register User
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validasi input tidak boleh kosong
    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Semua kolom wajib diisi!" });
    }

    try {
        // Cek apakah email sudah terdaftar
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ msg: "Email sudah digunakan!" });
        }

        // Hash password sebelum disimpan ke database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Simpan user baru
        await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ msg: "Registrasi berhasil!" });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan pada server!" });
    }
};

export const getRegister = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ["id", "name", "email"], // Tidak menampilkan password demi keamanan
        });

        res.status(200).json(users);
    } catch (error) {
        console.error("Error saat mengambil data pengguna:", error);
        res.status(500).json({ msg: "Terjadi kesalahan pada server!" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Cari user berdasarkan email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan!" });
        }

        // Verifikasi password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ msg: "Password salah!" });
        }

        res.status(200).json({ 
            msg: "Login berhasil!",
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error saat login:", error);
        res.status(500).json({ msg: "Terjadi kesalahan pada server!" });
    }
};

export const resetPassword = async (req, res) => {
    try {
        const { email, newPassword } = req.body;

        // Cari user berdasarkan email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan!" });
        }

        // Hash password baru
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update password di database
        await user.update({ password: hashedPassword });

        res.status(200).json({ msg: "Password berhasil direset!" });
    } catch (error) {
        console.error("Error saat reset password:", error);
        res.status(500).json({ msg: "Terjadi kesalahan pada server!" });
    }
};