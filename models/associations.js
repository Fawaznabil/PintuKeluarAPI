import User from "./user.js";
import Layanan from "./layanan.js";
import PilihLayanan from "./pilihLayanan.js";
import Produk from "./produk.js";
import Produkdetail from "./produkdetail.js";
import merekproduk from "./merekproduk.js";
import dokterPsikolog from "./dokterpsikolog.js";
import Durasi from "./durasi.js";
import Booking from "./booking.js";

// Definisikan hubungan setelah kedua model diekspor
User.hasMany(Layanan, { foreignKey: "userId", as: "layanans" });
Layanan.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara User dan Pilih Layanan
User.hasMany(PilihLayanan, { foreignKey: "userId", as: "pilihlayanans" });
PilihLayanan.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Pilih Layanan
Layanan.hasMany(PilihLayanan, { foreignKey: "layananId", as: "pilihlayanans" });
PilihLayanan.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara User dan Produk
User.hasMany(Produk, { foreignKey: "userId", as: "produks" });
Produk.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Produk
Layanan.hasMany(Produk, { foreignKey: "layananId", as: "produks" });
Produk.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara Pilih Layanan dan Produk
PilihLayanan.hasMany(Produk, { foreignKey: "pilihlayananId", as: "produks" });
Produk.belongsTo(PilihLayanan, { foreignKey: "pilihlayananId", as: "pilihlayanan" });

// Relasi antara User dan Produk Detail
User.hasMany(Produkdetail, { foreignKey: "userId", as: "produkdetails" });
Produkdetail.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Produk Detail
Layanan.hasMany(Produkdetail, { foreignKey: "layananId", as: "produkdetails" });
Produkdetail.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara Pilih Layanan dan Produk Detail
PilihLayanan.hasMany(Produkdetail, { foreignKey: "pilihlayananId", as: "produkdetails" });
Produkdetail.belongsTo(PilihLayanan, { foreignKey: "pilihlayananId", as: "pilihlayanan" });

// Relasi antara Produk dan Produk Detail
Produk.hasMany(Produkdetail, { foreignKey: "produkId", as: "produkdetails" });
Produkdetail.belongsTo(Produk, { foreignKey: "produkId", as: "produk" });

// Relasi antara User dan Merek Produk
User.hasMany(merekproduk, { foreignKey: "userId", as: "merekproduks" });
merekproduk.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Merek Produk
Layanan.hasMany(merekproduk, { foreignKey: "layananId", as: "merekproduks" });
merekproduk.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara Pilih Layanan dan Merek Produk
PilihLayanan.hasMany(merekproduk, { foreignKey: "pilihlayananId", as: "merekproduks" });
merekproduk.belongsTo(PilihLayanan, { foreignKey: "pilihlayananId", as: "pilihlayanan" });

// Relasi antara Produk dan Merek Produk
Produk.hasMany(merekproduk, { foreignKey: "produkId", as: "merekproduks" });
merekproduk.belongsTo(Produk, { foreignKey: "produkId", as: "produk" });

// Relasi antara Produk dan Merek Produk
Produkdetail.hasMany(merekproduk, { foreignKey: "produkdetailId", as: "merekproduks" });
merekproduk.belongsTo(Produkdetail, { foreignKey: "produkdetailId", as: "produkdetail" });

// Relasi antara User dan Pilih Dokter Psikolog
User.hasMany(dokterPsikolog, { foreignKey: "userId", as: "dokterPsikologs" });
dokterPsikolog.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Pilih Dokter Psikolog
Layanan.hasMany(dokterPsikolog, { foreignKey: "layananId", as: "dokterPsikologs" });
dokterPsikolog.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara User dan Pilih Durasi
User.hasMany(Durasi, { foreignKey: "userId", as: "Durasis" });
Durasi.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Pilih Durasi
Layanan.hasMany(Durasi, { foreignKey: "layananId", as: "Durasis" });
Durasi.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara Dokter atau Psikolog dan Pilih Durasi
dokterPsikolog.hasMany(Durasi, { foreignKey: "dokterpsikologId", as: "Durasis" });
Durasi.belongsTo(dokterPsikolog, { foreignKey: "dokterpsikologId", as: "dokterpsikolog" });




// Relasi antara Layanan dan Booking
Layanan.hasMany(Booking, { foreignKey: "layananId", as: "Bookings" });
Booking.belongsTo(Layanan, { foreignKey: "layananId", as: "layanan" });

// Relasi antara User dan Booking
User.hasMany(Booking, { foreignKey: "userId", as: "Bookings" });
Booking.belongsTo(User, { foreignKey: "userId", as: "user" });

// Relasi antara Layanan dan Booking
Durasi.hasMany(Booking, { foreignKey: "durasiId", as: "Bookings" });
Booking.belongsTo(Durasi, { foreignKey: "durasiId", as: "durasi" });

// Relasi antara Dokter atau Psikolog dan Booking
dokterPsikolog.hasMany(Booking, { foreignKey: "dokterpsikologId", as: "Bookings" });
Booking.belongsTo(dokterPsikolog, { foreignKey: "dokterpsikologId", as: "dokterpsikolog" });
