// Авторизация
getPforfile();
function getPforfile() {
    let login;
    let pass;
    let users = [{
        name: 'Константин',
        login: 'Dante',
        pass: '333'
    },
    {
        name: 'Валентина',
        login: 'Rouse',
        pass: '333'
    }];
    while (true) {
        login = prompt('Введите свой логин');
        pass = prompt('Введите свой пароль');
        if (login == null || pass == null) {
            break;
        }
        for (i = 0; i < users.length; i++) {
            if (users[i].login == login && users[i].pass == pass) {
                alert(users[i].name + ' ' + 'добро пожаловать, ' + ' в ваш личный кабинет!');
                return;
            }
        }
        if (login == '' || pass == '') {
            alert('Вы заполнили не все поля');
            continue;
        }
        else {
            alert('К сожалению вы не зарегистрованы ;(');
            return getPforfile();
        }
    };
};