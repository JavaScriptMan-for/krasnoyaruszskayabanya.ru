console.log(
    " Добро пожаловать на наш сайт! Спасибо, что выбрали нас! Наши цены на 40% меньше, чем у конкурентов. Сотни людей уже опробовали наши услуги."
)
console.log("Просим в поиске запрашивать запросы простыми словами. Интересует цена? - напишите цены или цена.")
console.log("Все отзывы можете увидеть в нашей группе в телеграмме t.me/ссылка и в других соцсетях.")
console.log("Просим ознокомится со всем содержимым сайта, на всякий случай :)")
let information = true;
localStorage.setItem("Online?", information);

setInterval(()=>{
    if(window.innerWidth <= 265) {
        document.querySelector('#contact').innerHTML = "Контакты"
    }
    if(window.innerWidth > 265) {
        document.querySelector('#contact').innerHTML = "Связаться с нами"
    }
},100)
