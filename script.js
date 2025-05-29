document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  alert(`Terima kasih, ${name}, atas ucapan Anda: "${message}"`);
  // Di sini Anda dapat menambahkan kode untuk mengirim data ke backend atau layanan penyimpanan
});
