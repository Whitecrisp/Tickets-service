const schemeSvg = document.querySelector(".scheme-svg")
const totalPriceTag = document.querySelector(".price-total") /*Итоговая цена */
const menuButton = document.querySelector('.m-menu')
const menu = document.querySelector('.menu')
let cost = 15;  /*Цена одного билета */
let totalPrice = 0; /*Общая цена за все выбранные билеты */
schemeSvg.addEventListener("click", (event) =>{
    if(!event.target.classList.contains("booked")){   /*Проверка на занятость места, если занято, то не выбирается */
        event.target.classList.toggle("active");  /* Добавление класса active, окрашивание */
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice =  totalSeats * cost;  /*Подсчет итоговой цены всех билетов */
        totalPriceTag.textContent = totalPrice ;  /*Замена цены в HTML эл-те */
    }
});

menuButton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});
