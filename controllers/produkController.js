import User from "../models/user.js";
import Layanan from "../models/layanan.js";
import bcrypt from "bcrypt";
import Produk from "../models/produk.js";
import pilihLayanan from "../models/pilihLayanan.js";
import Produkdetail from "../models/produkdetail.js";
import merekproduk from "../models/merekproduk.js";
import dokterPsikolog from "../models/dokterpsikolog.js";
import durasi from "../models/durasi.js";
import Durasi from "../models/durasi.js";
import Booking from "../models/booking.js";

export const createLayanan = async (req, res) => {
    try {
        const {
            userId,
            nama_layanan
        } = req.body;

        // Cek apakah userId ada di tabel users
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan"
            });
        }

        // Buat layanan baru
        const layanan = await Layanan.create({
            userId,
            nama_layanan
        });

        res.status(201).json({
            message: "Layanan berhasil dibuat",
            data: layanan,
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan",
            error: error.message
        });
    }
};

export const getAllLayanan = async (req, res) => {
    try {
        const layanan = await Layanan.findAll({
            include: [{
                model: User,
                as: "user", // Sesuaikan dengan alias yang digunakan pada relasi
                attributes: ["id", "name", "email"],
            }],
        });

        res.status(200).json({
            message: "Data layanan berhasil diambil",
            data: layanan,
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan",
            error: error.message
        });
    }
};

export const getLayananById = async (req, res) => {
    try {
        const { id } = req.params;

        const layanan = await Layanan.findByPk(id, {
            include: [
                {
                    model: User,
                    as: "user", // Sesuaikan dengan alias di associations.js
                    attributes: ["id", "name", "email"],
                },
            ],
        });

        if (!layanan) {
            return res.status(404).json({
                message: "Layanan tidak ditemukan"
            });
        }

        res.status(200).json({
            message: "Data layanan berhasil diambil",
            data: layanan,
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan",
            error: error.message
        });
    }
};

// Tambah Pilih Layanan
export const tambahpilihlayanan = async (req, res) => {
    try {
      const { nama_pilih_layanan, userId, layananId } = req.body;
  
      // Cek apakah User dan Layanan ada
      const user = await User.findByPk(userId);
      const layanan = await Layanan.findByPk(layananId);
  
      if (!user) {
        return res.status(404).json({ message: "User tidak ditemukan" });
      }
  
      if (!layanan) {
        return res.status(404).json({ message: "Layanan tidak ditemukan" });
      }
  
      // Buat Produk Baru
      const pilihlayananbaru = await pilihLayanan.create({
        nama_pilih_layanan,
        userId,
        layananId,
      });
  
      res.status(201).json({
        message: "Produk berhasil ditambahkan",
        data: pilihlayananbaru,
      });
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan",
        error: error.message,
      });
    }
  };
  
// Get All Pilih Layanan
export const getAllpilihlayanan = async (req, res) => {
    try {
      const pilihlayanans = await pilihLayanan.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name", "email"], // Ambil data user tertentu
          },
          {
            model: Layanan,
            as: "layanan",
            attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
          },
        ],
      });
  
      res.status(200).json({
        message: "Data pilihLayanan berhasil diambil",
        data: pilihlayanans,
      });
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan",
        error: error.message,
      });
    }
  };

// Tambah Produk
export const tambahproduk = async (req, res) => {
    try {
        const { nama_produk, userId, layananId, pilihlayananId } = req.body;

        // Cek apakah User, Layanan, dan Pilih Layanan ada
        const user = await User.findByPk(userId);
        const layanan = await Layanan.findByPk(layananId);
        const pilihLayananData = await pilihLayanan.findByPk(pilihlayananId);

        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        if (!layanan) {
            return res.status(404).json({ message: "Layanan tidak ditemukan" });
        }

        if (!pilihLayananData) {
            return res.status(404).json({ message: "Pilih Layanan tidak ditemukan" });
        }

        // Cek apakah nama_pilih_layanan kosong
        if (!pilihLayananData.nama_pilih_layanan) {
            return res.status(400).json({ message: "Nama Pilih Layanan tidak boleh kosong" });
        }

        // Buat Produk Baru
        const produkBaru = await Produk.create({
            nama_produk,
            userId,
            layananId,
            pilihlayananId
        });

        res.status(201).json({
            message: "Produk berhasil ditambahkan",
            data: produkBaru,
        });
    } catch (error) {
        res.status(500).json({
            message: "Terjadi kesalahan",
            error: error.message,
        });
    }
};

// Get All produk
export const getAllproduk = async (req, res) => {
    try {
      const produks = await Produk.findAll({
        include: [
          {
            model: User,
            as: "user",
            attributes: ["id", "name", "email"], // Ambil data user tertentu
          },
          {
            model: Layanan,
            as: "layanan",
            attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
          },
          {
            model: pilihLayanan,
            as: "pilihlayanan",
            attributes: ["id", "nama_pilih_layanan"], // Ambil data layanan tertentu
          },
        ],
      });
  
      res.status(200).json({
        message: "Data Produk berhasil diambil",
        data: produks,
      });
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan",
        error: error.message,
      });
    }
  };

// Tambah Produk Detail
export const tambahprodukdetail = async (req, res) => {
  try {
      const { nama_produk_detail, userId, layananId, pilihlayananId, produkId } = req.body;

      // Cek apakah User, Layanan, dan Pilih Layanan ada
      const user = await User.findByPk(userId);
      const layanan = await Layanan.findByPk(layananId);
      const pilihLayananData = await pilihLayanan.findByPk(pilihlayananId);
      const produk = await Produk.findByPk(produkId);

      if (!user) {
          return res.status(404).json({ message: "User tidak ditemukan" });
      }

      if (!layanan) {
          return res.status(404).json({ message: "Layanan tidak ditemukan" });
      }

      if (!pilihLayananData) {
          return res.status(404).json({ message: "Pilih Layanan tidak ditemukan" });
      }

      if (!produk) {
        return res.status(404).json({ message: "Porduk tidak ditemukan" });
    }

      // Cek apakah nama_pilih_layanan kosong
      if (!pilihLayananData.nama_pilih_layanan) {
          return res.status(400).json({ message: "Nama Pilih Layanan tidak boleh kosong" });
      }

      // Buat Produk Baru
      const produkdetail = await Produkdetail.create({
          nama_produk_detail,
          userId,
          layananId,
          pilihlayananId,
          produkId
      });

      res.status(201).json({
          message: "Produk Detail berhasil ditambahkan",
          data: produkdetail,
      });
  } catch (error) {
      res.status(500).json({
          message: "Terjadi kesalahan",
          error: error.message,
      });
  }
};

// Get All produk Detail
export const getAllprodukdetail = async (req, res) => {
  try {
    const produkdetails = await Produkdetail.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"], // Ambil data user tertentu
        },
        {
          model: Layanan,
          as: "layanan",
          attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
        },
        {
          model: pilihLayanan,
          as: "pilihlayanan",
          attributes: ["id", "nama_pilih_layanan"], // Ambil data layanan tertentu
        },
        {
          model: Produk,
          as: "produk",
          attributes: ["id", "nama_produk"], // Ambil data layanan tertentu
        },
      ],
    });

    res.status(200).json({
      message: "Data Produk Detail berhasil diambil",
      data: produkdetails,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Tambah Produk Merek
export const tambahprodukmerek = async (req, res) => {
  try {
      let { nama_produk_merek, userId, layananId, pilihlayananId, produkId, produkdetailId } = req.body;

      // Cek apakah User, Layanan, dan Pilih Layanan ada
      const user = await User.findByPk(userId);
      const layanan = await Layanan.findByPk(layananId);
      const pilihLayananData = await pilihLayanan.findByPk(pilihlayananId);
      const produk = await Produk.findByPk(produkId);
      const produkdetailData = await Produkdetail.findByPk(produkdetailId);

      if (!user) {
          return res.status(404).json({ message: "User tidak ditemukan" });
      }

      if (!layanan) {
          return res.status(404).json({ message: "Layanan tidak ditemukan" });
      }

      if (!pilihLayananData) {
          return res.status(404).json({ message: "Pilih Layanan tidak ditemukan" });
      }

      if (!produk) {
          return res.status(404).json({ message: "Produk tidak ditemukan" });
      }

      if (!produkdetailData) {
          return res.status(404).json({ message: "Produk Detail tidak ditemukan" });
      }

      // Pastikan nama_produk_merek selalu dalam format array
      if (typeof nama_produk_merek === "string") {
          nama_produk_merek = [nama_produk_merek]; // Ubah string menjadi array
      } else if (!Array.isArray(nama_produk_merek)) {
          return res.status(400).json({ message: "Nama Produk Merek harus berupa string atau array" });
      }

      // Simpan sebagai JSON string
      const produkmerek = await merekproduk.create({
          nama_produk_merek: JSON.stringify(nama_produk_merek), // Simpan sebagai JSON string
          userId,
          layananId,
          pilihlayananId,
          produkId,
          produkdetailId
      });

      res.status(201).json({
          message: "Produk Merek berhasil ditambahkan",
          data: produkmerek,
      });
  } catch (error) {
      res.status(500).json({
          message: "Terjadi kesalahan",
          error: error.message,
      });
  }
};

// Get All produk Merek
export const getAllprodukmerek = async (req, res) => {
  try {
    const produkmereks = await merekproduk.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"], // Ambil data user tertentu
        },
        {
          model: Layanan,
          as: "layanan",
          attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
        },
        {
          model: pilihLayanan,
          as: "pilihlayanan",
          attributes: ["id", "nama_pilih_layanan"], // Ambil data layanan tertentu
        },
        {
          model: Produk,
          as: "produk",
          attributes: ["id", "nama_produk"], // Ambil data layanan tertentu
        },
        {
          model: Produkdetail,
          as: "produkdetail",
          attributes: ["id", "nama_produk_detail"], // Ambil data layanan tertentu
        },
      ],
    });

    res.status(200).json({
      message: "Data Produk Merek berhasil diambil",
      data: produkmereks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Tambah Pilih Psikolog atau Dokter
export const tambahpilihpsikologdokter = async (req, res) => {
  try {
    const { pilih_dokter_psikolog, userId, layananId } = req.body;

    // Cek apakah User dan Layanan ada
    const user = await User.findByPk(userId);
    const layanan = await Layanan.findByPk(layananId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    if (!layanan) {
      return res.status(404).json({ message: "Layanan tidak ditemukan" });
    }

    // Buat Produk Baru
    const pilihdokterpsikolog = await dokterPsikolog.create({
      pilih_dokter_psikolog,
      userId,
      layananId,
    });

    res.status(201).json({
      message: "Pilih Dokter Psikolog berhasil ditambahkan",
      data: pilihdokterpsikolog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Get All Pilih Dokter atau Psikolog
export const getAlldokterpsikolog = async (req, res) => {
  try {
    const dokterpsikolog = await dokterPsikolog.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"], // Ambil data user tertentu
        },
        {
          model: Layanan,
          as: "layanan",
          attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
        },
      ],
    });

    res.status(200).json({
      message: "Data Pilih Dokter atau Psikolog berhasil diambil",
      data: dokterpsikolog,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Tambah Durasi
export const tambahdurasi = async (req, res) => {
  try {
    let { durasi, userId, layananId, dokterpsikologId } = req.body;

    // Cek apakah User, Layanan, dan Dokter Psikolog ada
    const user = await User.findByPk(userId);
    const layanan = await Layanan.findByPk(layananId);
    const dokterpsikologdata = await dokterPsikolog.findByPk(dokterpsikologId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    if (!layanan) {
      return res.status(404).json({ message: "Layanan tidak ditemukan" });
    }
    if (!dokterpsikologdata) {
      return res.status(404).json({ message: "Dokter Psikolog tidak ditemukan" });
    }

    // Pastikan `durasi` berupa array
    if (!Array.isArray(durasi) || durasi.length === 0) {
      return res.status(400).json({ message: "Durasi harus berupa array yang tidak kosong" });
    }

    // Validasi bahwa semua durasi adalah angka positif
    if (!durasi.every((item) => typeof item === "number" && item > 0)) {
      return res.status(400).json({ message: "Setiap durasi harus berupa angka positif" });
    }

    // Buat array data untuk disimpan
    const durasiData = durasi.map((item) => ({
      durasi: item,
      userId,
      layananId,
      dokterpsikologId,
    }));

    // Simpan semua data ke database sekaligus menggunakan bulkCreate
    const savedDurasi = await Durasi.bulkCreate(durasiData);

    res.status(201).json({
      message: "Durasi berhasil ditambahkan",
      data: savedDurasi,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Get All Durasi
export const getAlldurasi = async (req, res) => {
  try {
    const durasiData = await Durasi.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"], // Ambil data user tertentu
        },
        {
          model: Layanan,
          as: "layanan",
          attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
        },
        {
          model: dokterPsikolog,
          as: "dokterpsikolog",
          attributes: ["id", "pilih_dokter_psikolog"], // Ambil data layanan tertentu
        },
      ],
    });

    res.status(200).json({
      message: "Data Durasi berhasil diambil",
      data: durasiData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Tambah Booking
export const tambahbooking = async (req, res) => {
  try {
    let { jam_booking, userId, layananId, dokterpsikologId, durasiId } = req.body;

    // Cek apakah User, Layanan, dan Dokter Psikolog ada
    const user = await User.findByPk(userId);
    const layanan = await Layanan.findByPk(layananId);
    const dokterpsikologdata = await dokterPsikolog.findByPk(dokterpsikologId);
    const DurasiData = await Durasi.findByPk(durasiId);

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    if (!layanan) {
      return res.status(404).json({ message: "Layanan tidak ditemukan" });
    }
    if (!dokterpsikologdata) {
      return res.status(404).json({ message: "Dokter Psikolog tidak ditemukan" });
    }
    if (!DurasiData) {
      return res.status(404).json({ message: "Durasi tidak ditemukan" });
    }

    // Pastikan `jam_booking` berupa array yang tidak kosong
    if (!Array.isArray(jam_booking) || jam_booking.length === 0) {
      return res.status(400).json({ message: "jam_booking harus berupa array yang tidak kosong" });
    }

    // Validasi bahwa semua elemen dalam `jam_booking` adalah string dalam format HH:MM
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    if (!jam_booking.every((item) => typeof item === "string" && timeRegex.test(item))) {
      return res.status(400).json({ message: "Setiap jam_booking harus dalam format HH:MM" });
    }

    // Buat array data untuk disimpan
    const bookingData = jam_booking.map((item) => ({
      jam_booking: item,
      userId,
      layananId,
      dokterpsikologId,
      durasiId
    }));

    // Simpan semua data ke database sekaligus menggunakan bulkCreate
    const savedBooking = await Booking.bulkCreate(bookingData);

    res.status(201).json({
      message: "Booking berhasil ditambahkan",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};

// Get All Booking
export const getAllbooking = async (req, res) => {
  try {
    const bookingData = await Booking.findAll({
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"], // Ambil data user tertentu
        },
        {
          model: Layanan,
          as: "layanan",
          attributes: ["id", "nama_layanan"], // Ambil data layanan tertentu
        },
        {
          model: dokterPsikolog,
          as: "dokterpsikolog",
          attributes: ["id", "pilih_dokter_psikolog"], // Ambil data layanan tertentu
        },
        {
          model: durasi,
          as: "durasi",
          attributes: ["id", "durasi"], // Ambil data layanan tertentu
        },
      ],
    });

    res.status(200).json({
      message: "Data Booking berhasil diambil",
      data: bookingData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan",
      error: error.message,
    });
  }
};
