import { bin } from "./make_lunch.js";

const notific = document.getElementById('notific');
const notific_text = document.getElementById('notific_text');
const notific_button = document.getElementById('notific_button');
const butElem = document.getElementById('submit_button');


butElem.addEventListener('click', (e) => {
  if (bin["soup"] == '1') {
    if (bin["main-course"] == '1') {
      if (bin["salad"] == '1') {
        if (bin["drink"] == '') {
          e.preventDefault();
          notific_text.innerHTML = "Выберите напиток";
          notific.style.display = 'flex';
          
        }
      }
      else {
        if(bin["drink"] == '') {
          e.preventDefault();
          notific_text.innerHTML = "Выберите напиток";
          notific.style.display = 'flex';
        }
      }
    }
    else {
      if(bin["salad"] == '1') {
        if (bin["drink"] == '') {
          e.preventDefault();
          notific_text.innerHTML = "Выберите напиток";
          notific.style.display = 'flex';
        }
      }
      else {
        e.preventDefault();
        notific_text.innerHTML = 'Выберите главное блюдо/салат/стартер';
        notific.style.display = 'flex';
      }
    }
  }
      
    if (bin["main-course"] == '1') {
      if (bin["salad"] == '1') {
        if (bin["drink"] == '') {
          e.preventDefault();
          notific_text.innerHTML = "Выберите напиток";
          notific.style.display = 'flex';
        }
      }
      else {
        if (bin["drink"] == '') {
          e.preventDefault();
          notific_text.innerHTML = "Выберите напиток";
          notific.style.display = 'flex';
        }
      }
    }

    if (bin["salad"] == '1') {
      if (bin["soup"] == '' || bin["main-course"] =='') {
        e.preventDefault();
        notific_text.innerHTML = 'Выберите суп или главное блюдо';
        notific.style.display = 'flex';
      }
    }

    if (bin["dessert"] == '1' || bin["drink"] == '1') {
      if(bin["main-course"] == '') {
        e.preventDefault();
        notific_text.innerHTML = 'Выберите главное блюдо';
        notific.style.display = 'flex';
      }
    }

    if (bin["soup"] == '' && bin["main-course"] == '' && bin["salad"] == '' && bin["drink"] == '' && bin["dessert"] == '') {
      e.preventDefault();
      notific_text.innerHTML = 'Ничего не выбрано. Выберите блюда для заказа';
      notific.style.display = 'flex';
      
    }
})

notific_button.addEventListener('click', () => {
  notific.style.display = 'none';
})