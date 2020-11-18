function getDateTime() {
    let d = new Date();
    let year = d.getFullYear();
    let weekday = d.getDay();
    let month = d.getMonth();
    let day = d.getDate();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    function times(seconds, txt) {
        var cases = [2, 0, 1, 1, 1, 2];
        return txt[(seconds % 100 > 4 && seconds % 100 < 20) ? 2 : cases[(seconds % 10 < 5) ? seconds % 10 : 5]];
    }

    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]
    let months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Агуста',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]

    function getDateCurrent() {
        console.log(`Сегодня ${day} ${months[month]} ${year} ${days[weekday]}
        ${hours} ${times(hours, ['Час', 'Часа', 'Часов'])}
        ${minutes} ${times(minutes, ['Минута', 'минуты', 'Минут'])}
        ${seconds} ${times(seconds, ['Секунда', 'Секунды', 'Секунд'])}`);
    }
    getDateCurrent();
}

setInterval(getDateTime, 1000);







