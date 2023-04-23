import handlebars from 'handlebars/dist/handlebars.runtime';
import btnPartial from './templates/partials/button-partial.hbs';
import btnTmpl from './templates/button.hbs';
import btnCntx from './contexts/btn';

handlebars.registerPartial('btnPartial', btnPartial);

document.addEventListener("DOMContentLoaded", function() {
  const main = document.querySelector('.main');
  const div = document.createElement('div');
  div.innerHTML = btnTmpl(btnCntx);
  main!.appendChild(div); 
});
