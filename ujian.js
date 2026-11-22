// DATA JADWAL, TOKEN & BANK SOAL UJIAN KULIAH (Simpan sebagai: ujian.js)
const dataUjianKuliah = [
  {
    id: "ti-1-uts",
    jurusan: "ti",
    namaJurusan: "Teknik Informatika",
    tingkat: "1",
    labelTingkat: "Tingkat I (Sem 1)",
    mataKuliah: "English for Informatics (UTS)",
    durasiMenit: 60,
    token: "TI2026",
    soal: [
      {
        q: "1. In computer networking, a 'firewall' is primarily used to _____.",
        opts: [
          "increase internet download speed",
          "monitor and control incoming and outgoing network traffic",
          "store backup files in the cloud",
          "compile programming source code"
        ],
        ans: 1
      },
      {
        q: "2. If the server _____ properly, the online examination system will run without interruption.",
        opts: ["configured", "is configured", "configuring", "configure"],
        ans: 1
      }
    ]
  },
  {
    id: "tind-2-uas",
    jurusan: "tind",
    namaJurusan: "Teknik Industri",
    tingkat: "2",
    labelTingkat: "Tingkat II (Sem 3)",
    mataKuliah: "Technical English & Quality Control (UAS)",
    durasiMenit: 60,
    token: "IND2026",
    soal: [
      {
        q: "1. Lean manufacturing aims to minimize _____ within a production system without sacrificing productivity.",
        opts: ["quality", "waste", "safety", "efficiency"],
        ans: 1
      },
      {
        q: "2. All safety equipment _____ before operating the heavy machinery.",
        opts: ["must check", "must be checked", "checking", "checked"],
        ans: 1
      }
    ]
  },
  {
    id: "ts-3-uas",
    jurusan: "ts",
    namaJurusan: "Teknik Sipil",
    tingkat: "3",
    labelTingkat: "Tingkat III (Sem 5)",
    mataKuliah: "Journal & Abstract Writing (UAS)",
    durasiMenit: 45,
    token: "SIPIL26",
    soal: [
      {
        q: "1. Which tense is most commonly used in the 'Methodology' section of an engineering research paper?",
        opts: ["Future Continuous", "Simple Past Tense", "Present Continuous", "Future Perfect"],
        ans: 1
      },
      {
        q: "2. Reinforced concrete combines concrete's compressive strength with steel's _____ strength.",
        opts: ["tensile", "thermal", "optical", "acoustic"],
        ans: 0
      }
    ]
  }
];
