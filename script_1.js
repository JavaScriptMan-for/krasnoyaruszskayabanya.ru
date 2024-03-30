////document.location.href = "index.html"
//document.location.href = "info.html"
//document.location.href = "contact.html"
document.addEventListener('keydown', check)
function check(e) {
    if(e.keyCode === 13) {
        if(document.querySelector('input').value == "Адрес" || document.querySelector('input').value == "адрес" || document.querySelector('input').value == "АДРЕС") {
            document.location.hash = '#___1'
        }
        if(document.querySelector('input').value == "Чем лучше других?" || document.querySelector('input').value == "Чем лучше конкурентов?" || document.querySelector('input').value == "Чем лучше других" || document.querySelector('input').value == "Чем лучше конкурентов" || document.querySelector('input').value == "чем лучше других?" || document.querySelector('input').value == "чем лучше конкурентов?" || document.querySelector('input').value == "чем лучше других" || document.querySelector('input').value == "Чем лучше конкурентов") {
            document.location.hash = '#___2'
        }
    
        if(document.querySelector('input').value == "цены" || document.querySelector('input').value == "цена" || document.querySelector('input').value == "Цены" || document.querySelector('input').value == "Цена") {
            document.location.hash = '#___3'
        }
        if(document.querySelector('input').value == "правила" || document.querySelector('input').value == "Правила" || document.querySelector('input').value == "правила поведения" || document.querySelector('input').value == "Правила поведения") {
            document.location.hash = "#___5"
        }
        document.location.href = "info.html"    
    }
}