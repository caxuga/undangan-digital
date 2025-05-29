export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Metode tidak diizinkan');
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).send('Nama dan pesan wajib diisi.');
  }

  // Simpan ke memory (nanti bisa diganti simpan ke DB / email)
  console.log('RSVP Masuk:', name, message);

  // Contoh: kirim sukses
  return res.status(200).send(`Terima kasih, ${name}! Ucapan kamu sudah diterima.`);
}
