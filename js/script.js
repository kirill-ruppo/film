/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)//done

2) Изменить жанр фильма, поменять "комедия" на "драма"//done

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS//done

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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



console.log(list);
adv.forEach(item =>{
    item.remove();
});

genre.textContent = 'Драма';
poster.style.backgroundImage = 'url(../img/bg.jpg)';

list.innerHTML = '';


movieDB.movies.sort();
console.log(movieDB.movies);

movieDB.movies.forEach((film, i) =>{
    list.innerHTML +=  `<li class="promo__interactive-item">${i+1}. ${film}
    <div class="delete"></div>
</li>`;
});
