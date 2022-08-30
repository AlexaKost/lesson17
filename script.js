'use strict'

let date = new Date(),
    day = date.getDay(),
    daysweek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    dateNewYear = new Date('1 January 2023').getTime(),
    dateNow = new Date().getTime(),
    days = Math.ceil((dateNewYear - dateNow) / 1000 / 60 / 60 / 24),
    hours = new Date(),
    timeOfDay = hours.getHours(),
    number = declensionNum(days, ['день', 'дня', 'дней']);

    if (timeOfDay > 6 && timeOfDay < 11){
        document.write('Доброе утро!')
    }
    if (timeOfDay > 10 && timeOfDay < 17){
        document.write('Добрый день!')
    }
    if (timeOfDay > 16 && timeOfDay < 23){
        document.write('Добрый вечер!')
    }
    if (timeOfDay > 22 && timeOfDay < 5){
        document.write('Доброй ночи!')
    };

function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}; 

document.write('<br \/> Сегодня: ' + daysweek[day]);
document.write('<br \/> Текущее время: ' + date.toLocaleTimeString('ru')); 
document.write('<br \/> До нового года осталось: ' + days + ' ' + number); 

