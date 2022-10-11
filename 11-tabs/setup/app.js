const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
   const dataId = e.target.dataset.id;
   if (dataId) {
      //remove active on btns
      btns.forEach(function (btn) {
         btn.classList.remove('active');
         e.target.classList.add('active');
      });
      //hide articles
      articles.forEach(function (article) {
         article.classList.remove('active');
         
      });
      const element = document.querySelector(`#${dataId}`);
      element.classList.add('active')
   }
});