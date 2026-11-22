// FILE SOAL TOEFL (Simpan sebagai: toefl.js)
// Cara menambah soal: Cukup salin blok "soalToefl.push({...});" dan tempel di PALING BAWAH.

const soalToefl = [];

// --- MULAI DAFTAR SOAL TOEFL (Nomor otomatis urut) ---

soalToefl.push({
  kategori: "structure", // pilih: "structure" atau "reading"
  tanya: "Neither the lecturer nor the engineering students _____ present in the laboratory yesterday.",
  opsi: ["was", "were", "is", "are"],
  kunci: 1 // 0=A, 1=B, 2=C, 3=D
});

soalToefl.push({
  kategori: "structure",
  tanya: "The abstract of a scientific paper must _____ the main objective and findings concisely.",
  opsi: ["summarize", "summarizing", "summarized", "summary"],
  kunci: 0
});

soalToefl.push({
  kategori: "reading",
  tanya: "[Passage: Renewable energy technologies have seen rapid cost reductions over the past decade.] The word 'rapid' is closest in meaning to _____.",
  opsi: ["gradual", "fast", "expensive", "limited"],
  kunci: 1
});

// TEMPEL SOAL TOEFL BARU DI BAWAH BARIS INI:
