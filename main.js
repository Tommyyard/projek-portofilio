const saran = document.getElementById('mulai')
const masukan = document.getElementById('masukkan')

saran.addEventListener('click', function() {
    masukan.scrollIntoView({ behavior: 'smooth'})
})