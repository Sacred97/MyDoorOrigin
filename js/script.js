$(document).ready(function(){

    // Добавляю класс к бургеру

    $('.header__burger').click(function(event){
        $('.header__burger').toggleClass('active');
        
    });

    /* 
    Есть баг при котором если меню открыть в мобильной версии и перейти в нормально разрешение то меню исчезает.
    Этот код исправляет это
    */

    window.addEventListener("resize", function() {
        if ( $(window).width() > 1000 ) {
            $('.header__menu')[0].style.display = 'block'
        } else {
            $('.header__menu')[0].style.display = 'none'
        }
    });

    // Параметры для Слик Слайдера

    $('.us-working__slider').slick({
        slidesToShow: 2,
        //variableWidth: true,
        rows: 2,
        //slidesPerShow:2,
        //centerMode: true,
    });

})

// Функция для развертывания бургера

function menu() {

    if($('.header__menu')[0].style.display == "block") {
        $('.header__menu').slideUp(500);
    } else {
        $('.header__menu').slideDown(500); 
    }
}

// Массив объектов услуг

const services = [
    {title: "Выезд мастреа в пределах КАД", price: "800"},
    {title: "Вскрытие замка", price: "1500"},
    {title: "Замена замка", price: "1500"},
    {title: "Ремонт замка", price: "1500"},
    {title: "Перекодировка замков", price: "1500"},
    {title: "Замена панели", price: "1500"},
    {title: "Замена дверных ручек", price: "1000"},
    {title: "Регулировка двери", price: "1000"},
    {title: "Установка замка на новое место", price: "2000"},
    {title: "Ремонт дверей", price: "2000"},
    {title: "Переустановка дверей", price: "3000"},
    {title: "Сварочные работы", price: "2500"},
    {title: "Замена петель", price: "2500"},
    {title: "Установка и замена доводчиков", price: "2000"},
    {title: "Изготовление ключей по замку", price: "2000"},
    {title: "Аварийный-промышленный альпинизм", price: "5000"},
];

// Создание компонента услуг

function priceBlock (titlePrice, costPrice){
    return (
        `<div class="price__cost">
            <div class="price__cost-container">
                <p>` + titlePrice + `</p>
                <hr></hr>
                <h4>от ` + costPrice + ` ₽</h4>
                <hr></hr>
                <a href="tel:88888888888">Сделать звонок</a>
            </div>
        </div>`
    );
};

// Вывод всех имеющихся услуг

services.map( service => $('.price__container').append(priceBlock(service.title, service.price)))

// Анимация при скролле 

$('.main-page__window-main').hide()


/*window.addEventListener("scroll", function(){

    if ($(this).scrollTop() < 300) {
        $('.main-page__window-main').addClass('animate__animated animate__bounceInLeft')
    }


})*/

document.addEventListener('DOMContentLoaded', function(){

    $('.main-page__window-main').show()
    $('.main-page__window-main').addClass('animate__animated animate__bounceInLeft animate__delay-1s')

})

$(document).ready(function(){
    
        $(".header__menu").on("click","a", function (event) {
    
            event.preventDefault();
            let id  = $(this).attr('href'),
            top = $(id).offset().top - $('.header').height();   
            $('body,html').animate({scrollTop: top}, 500);
               
        });

        $(".main-page__container").on("click","a", function (event) {
    
            event.preventDefault();
            let id  = $(this).attr('href'),
            top = $(id).offset().top - $('.header').height();   
            $('body,html').animate({scrollTop: top}, 500);
               
        });

        $('.header__item').click(function( e ){
            e.preventDefault();
            $('.header__menu').find('.header__item_active').removeClass('header__item_active');
            $(this).addClass('header__item_active');
        });

        $(window).scroll(function() {

            let height = $(window).scrollTop();     

            if( height === 0 && height < $('.services').offset().top - $('.header').height() ){
                $('.header__list').children('li').eq(0).addClass('header__item_active');
            } else {
                $('.header__menu').find('.header__item_active').removeClass('header__item_active');
            }

            if( height >= $('.services').offset().top - $('.header').height()-1 && height < $('.us-working').offset().top - $('.header').height() - 1 ) {
                $('.header__list').children('li').eq(1).addClass('header__item_active');
            } else {
                //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
            }

            if( height >= $('.us-working').offset().top - $('.header').height() - 1 && height < $('.price').offset().top - $('.header').height() - 1 ) {
                $('.header__list').children('li').eq(2).addClass('header__item_active');
            } else {
                //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
            }

            if( height >= $('.price').offset().top - $('.header').height() - 1 && height < $('.contacts').offset().top + $('.header').height() - 1 ) {
                $('.header__list').children('li').eq(3).addClass('header__item_active');
            } else {
                //$('.header__menu').find('.header__item_active').removeClass('header__item_active');
            }

        });
    
    });

