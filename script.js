document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  alert(`Terima kasih, ${name}, atas ucapan Anda: "${message}"`);
  // Di sini Anda dapat menambahkan kode untuk mengirim data ke backend atau layanan penyimpanan
});

const eventDate = new Date("2030-01-01T07:00:00"); // Ganti sesuai tanggal kamu

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Acara sedang berlangsung!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, "0");
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);