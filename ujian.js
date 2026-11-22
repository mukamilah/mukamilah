// FILE JADWAL & SOAL UJIAN KULIAH (Simpan sebagai: ujian.js)
const jadwalUjian = [
  { id: "ti-1", kodeUnik: "TI-SEM1-UTS", jurusan: "ti", namaJurusan: "Teknik Informatika", semester: "1", mataKuliah: "English for Informatics I (UTS)", durasi: 60, token: "TI101" },
  { id: "ti-2", kodeUnik: "TI-SEM2-UTS", jurusan: "ti", namaJurusan: "Teknik Informatika", semester: "2", mataKuliah: "English for Informatics II (UTS)", durasi: 60, token: "TI202" },
  { id: "ti-3", kodeUnik: "TI-SEM3-UAS", jurusan: "ti", namaJurusan: "Teknik Informatika", semester: "3", mataKuliah: "Technical Reading & Documentation (UAS)", durasi: 60, token: "TI303" }
];

const soalUjian = [];

// --- MULAI DAFTAR SOAL UJIAN (Tempel soal baru di PALING BAWAH) ---

soalUjian.push({
  kodeUnik: "TI-SEM1-UTS", // Sesuaikan dengan kodeUnik jadwal di atas
  tanya: "A 'firewall' in computer networks is primarily used to _____.",
  opsi: ["increase download speed", "control incoming and outgoing network traffic", "store cloud backups", "compile source code"],
  kunci: 1 // 0=A, 1=B, 2=C, 3=D
});

soalUjian.push({
  kodeUnik: "TI-SEM1-UTS",
  tanya: "Hardware refers to the _____ components of a computer system.",
  opsi: ["virtual", "physical", "wireless", "temporary"],
  kunci: 1
});

soalUjian.push({
  kodeUnik: "TI-SEM2-UTS",
  tanya: "If the server _____ properly, the online examination system will run without interruption.",
  opsi: ["configured", "is configured", "configuring", "configure"],
  kunci: 1
});

soalUjian.push({
  kodeUnik: "TI-SEM3-UAS",
  tanya: "In software engineering, 'debugging' is the process of finding and fixing _____.",
  opsi: ["users", "errors in code", "new monitors", "internet cables"],
  kunci: 1
});

// TEMPEL SOAL UJIAN BARU DI BAWAH BARIS INI:
