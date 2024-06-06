

//----------------------example 1----------------------
//Давайте сделаем так, чтобы при клике на кнопку выводилось сообщение
let button1 = document.querySelector('#button1')
button1.addEventListener('click', () => alert('message'))

//----------------------example 2----------------------
//Давайте напишем код, чтобы при потере фокуса в инпуте выводилось сообщение с текстом этого инпута:
let input = document.querySelector('#input')
input.addEventListener('blur', function () {
    alert(this.value)
})
//Стрелочная функция не имеет методов call, apply,bind т.к.
// нет смысла привязывать this (не создает собственный контекст исполнения, она использует внешний)

//поэтому при использовании стрелочной функции в нашем случае вернет undefined
/*
//Или
let input=document.querySelector('#input')
input.addEventListener('blur', (e)=>{
    alert(e.currentTarget.value)
})
*/

//----------------------example 3----------------------
//Давайте сделаем так, чтобы при клике на кнопку сообщение выводилось в консоль только один раз. Для этого воспользуемся вторым параметром
let button2 = document.querySelector('#button2')
button2.addEventListener('click', () => console.log('message'), {once: true})

//----------------------example 4----------------------
//Давайте сделаем так, чтобы при клике на кнопку сообщение выводилось много раз
let button3 = document.querySelector('#button3')
button3.addEventListener('click', () => console.log('message'))

//----------------------example 5----------------------
//Параметр passive запрещает вызывать метод event.preventDefault при обработке события.
// Давайте к предыдущему примеру применим метод event.preventDefault, а также укажем в параметре passive значение true:
let button4 = document.querySelector('#button4')
button4.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('No message')
}, {passive: true})

//----------------------example 6----------------------
//Параметр useCapture в значении true показывает всплытие событий от внутреннего элемента до внешнего,
// при значении false - от внешнего до внутреннего элемента.
// При передаче параметра useCapture его имя опускается и записывает просто true или false.
// Давайте посмотрим как всплывают события в родительском и дочернем элементах при клике на них:
let parent = document.querySelector('#parent')
let child = document.querySelector('#child')

parent.addEventListener('click',
    () => alert('parent'),
    true
)
child.addEventListener('click',
    () => alert('child'),
    true
)