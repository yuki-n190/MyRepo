const loading = document.querySelector('#loading');

window.addEventListener('load' , () => {
  //ローディングが終わったときの処理
  loading.classList.add('loaded');
});