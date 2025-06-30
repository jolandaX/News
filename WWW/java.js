const scrollBtn = document.getElementById('scrollTopButton');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});
scrollBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


  
// Atver modālo logu pēc ID. Parmums/MusuKomanda
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
      modal.style.display = "block";
  }
}
// Aizver modālo logu, ja tiek klikšķināts ārpus tā
function closeModal(event, id) {
  event.stopPropagation();
  const modal = document.getElementById(id);
  if (modal) {
      modal.style.display = "none";
  }
}


const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Noņem aktīvo klasi visām pogām un saturam
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Pievieno aktīvo klasi šai pogai un atbilstošajam saturam
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });