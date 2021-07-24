/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const poster = document.querySelector('.promo__bg');
const list = document.querySelector('.promo__interactive-list');//псевдомасив
const addForm = document.querySelector('form.add');
const addInput = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');



addForm.addEventListener('submit', (event)=>{
    event.preventDefault();//при нажатии на кнопку страничка не будет перезагружаться
    let newFilm = addInput.value;
    const favourite = checkbox.checked;


    if(newFilm){

        if(newFilm.length > 21){
            newFilm = `${newFilm.substring(0, 22)}...`;
        }


        if(favourite){
            console.log('favourite film');
        }
        movieDB.movies.push(newFilm);
        movieDB.movies.sort();
    
        createMovieList(movieDB.movies, list);
    }
    addForm.reset();//очищаем форму
});




function adDel(arr){
    arr.forEach(item =>{
        item.remove();
    });
}

const makeChanges = () =>{
    genre.textContent = 'Драма';
    poster.style.backgroundImage = 'url(../img/bg.jpg)';
    
};



const sortDB = (arr) => {
    arr.sort();
};





function createMovieList(films, parent){
    parent.innerHTML = '';
    sortDB(movieDB.movies);
    films.forEach((film, i) =>{
        parent.innerHTML +=  `<li class="promo__interactive-item">${i+1}. ${film}
        <div class="delete"></div>
    </li>`;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(movieDB.movies, list);
        });
    });
}






createMovieList(movieDB.movies, list);

adDel(adv);
makeChanges();