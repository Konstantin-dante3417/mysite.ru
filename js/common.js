$(document).ready(function () {
    $('.slide-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dotsClass: "my-dots",
        responsive: [{
            breakpoint: 1026,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 688,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                arrows: false,
                dots: true,
            }
        }
        ]
    });
    $('.popup-link, .call-link').on('click', function () {
        $('html, body').css("overflow-y", "hidden");
        $('.popup-container').toggleClass('open');
        $('.popup').toggleClass('active-popup');
    });
    $('body').on('click', '.close-popup', function () {
        $('html, body').css("overflow-y", "visible");
        $('.popup-container').removeClass('open');
        $('.popup').removeClass('active-popup');
    })
    $('body').on('click', '.popup-container', function (e) {
        if (e.target == this) {
            $('html, body').css("overflow-y", "visible");
            $('.popup-container').removeClass('open');
            $('.popup').removeClass('active-popup');
        }
    });
    $('.close-modal').on('click', function () {
        $('.modal-message').removeClass('active-close');
    });

    $('body').on('click', '.btn', function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let secondName = $('#secondname').val();
        let testEmail = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

        validate();
        function validate() {
            $(this).removeClass('_error');
            while ((email && name && secondName) !== '' || email.search(testEmail) !== 0) {
                if ((name || secondName || email) === '') {
                    alert('Вы не заполнили не одного поля');
                    $('.input').addClass('_error');
                    return false;
                } else {
                    if (name === '') {
                        alert('Не заполнено поле с именем')
                        $('.input').removeClass('_error');
                        $('#name').addClass('_error');
                        $('#name').focus();
                        return false;
                    } else {
                        $('#name').removeClass('_error');
                    }
                    if (secondName === '') {
                        alert('Не заполнено поле с фамилией')
                        $('.input').removeClass('_error');
                        $('#secondname').addClass('_error');
                        $('#secondname').focus();
                        return false;
                    } else {
                        $('#secondname').removeClass('_error');
                    }
                    if (email !== '') {
                        if (email.search(testEmail) == 0) {
                            $('.input').removeClass('_error');
                            $('#email').removeClass('_error');
                            $('#name').val('');
                            $('#secondname').val('');
                            $('#email').val('');
                            $('html, body').css("overflow", "visible");
                            $('.popup-container').removeClass('open');
                            $('.popup').removeClass('active-popup');
                            $('.modal-message').addClass('active-close');
                            return false;
                        } else {
                            alert('Не верный формат почтового ящика');
                            $('.input').removeClass('_error');
                            $('#email').addClass('_error');
                            $('#email').focus();
                            return false;
                        }
                    } else {
                        alert('Поле email не должно быть пустым');
                        $('.input').removeClass('_error');
                        $('#email').addClass('_error');
                        $('#email').focus();
                        return false;
                    };
                };
            };
        };
    });
});













// const body = document.querySelector('body');
// const popupLink = document.querySelector('.popup-link');
// let = true;

// const timeOut = 800;

// if (popupLink.length > 0) {
//     for (let index = 0; index < popupLink.length; index++) {
//         const popupLinks = popupLinks[index];
//         popupLink.addEventListener('click', function (e) {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const currentPopup = document.getElementById(popupName);
//             popupOpen(currentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupClose = documnet.querySelector('.close-popup');
// if (popupClose.length > 0) {
//     const el = popupClose[index];
//     el.addEventListener('click', function (e) {
//         popupClose(el.closest('.popup-container'));
//         e.preventDefault();
//     });
// }

// function popupOpen(currentPopup) {
//     if (currentPopup && unlock) {
//         const popupActive = document.querySelector('poup-container.open');
//         if (popupActive) {
//             popupClose(popupActive, false)
//         } else {
//             bodyLock();
//         }
//         currentPopup.classlist.add('open');
//         currentPopu.addEventListener('click', function (e) {
//             if (!e.target.closest('.popup')) {
//                 popupClose(e.target.closest('.popup-container'));
//             }
//         });
//     }
// }
