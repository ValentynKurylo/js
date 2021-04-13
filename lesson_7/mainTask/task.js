//Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
/*
let hide = document.getElementById('hide')
let text = document.getElementById('text')
hide.but.onclick = (ev) => {
    text.hidden = true
    return false
}

 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
/*
let hide = document.getElementById('hide')
hide.but.onclick = (ev) =>{
    hide.but.hidden = true
    return false
}

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користува
/*
const age = document.getElementById('age')
age.ok.onclick = (e) =>{
    e.preventDefault()
    let a = age.inAge.value
   if(a < 18)
       alert(`your age < 18`)
}

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Создайте меню, которое раскрывается/сворачивается при клике
/*
let button = document.getElementById('buttons')
let menu = document.getElementById('menu')
button.show.hidden = true
button.hide.onclick = () => {
    menu.hidden = true
    button.show.hidden = false
    button.hide.hidden = true
    return false
}
button.show.onclick = () => {
    menu.hidden = false
    button.show.hidden = true
    button.hide.hidden = false
    return false
}

 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вывести список комментариев в документ, каждый в своем блоке.
//   Добавьте каждому комментарию по кнопке для сворачивания его body.
/*
let form = document.getElementById('com')
let comments = document.getElementById('comments')
form.add1.onclick = () =>{
    let com = {
        name : form.name.value,
        comment : form.comment.value
    }
    let element = document.createElement('div')
    element.classList.add('element')
    let elementName = document.createElement('div')
    let elementComment = document.createElement('div')
    let buttonHide = document.createElement('div')
    let buttonShow = document.createElement('div')
    comments.appendChild(element)
    element.appendChild(elementName)
    elementName.innerText = com.name
    element.appendChild(elementComment)
    elementComment.innerText = com.comment
    element.appendChild(buttonHide)
    element.appendChild(buttonShow)
    buttonShow.hidden = true
    buttonHide.innerHTML = '<button id="hide_comment">Hide comment</button>'
    buttonShow.innerHTML = '<button id="show_comment">Show comment</button>'
    let butHide = document.getElementById('hide_comment')
    let butShow = document.getElementById('show_comment')
butHide.onclick = () =>{
    elementComment.hidden = true
    buttonHide.hidden = true
    buttonShow.hidden = false
    return false
}
    butShow.onclick = () => {
        elementComment.hidden = false
        buttonHide.hidden = false
        buttonShow.hidden = true
        return false
    }
    return false
}

 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/*
let ok = document.getElementById('infoForms')
ok.onclick = (ev) => {
    let form1 = document.getElementById('form1')
    let form2 = document.getElementById('form2')
    console.log(form1.input1.value);
    console.log(form1.input2.value);
    console.log(form2.input1.value);
    console.log(form2.input2.value);
}

 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//- Створити функцію, яка генерує таблицю.
//   Перший аргумент визначає кількість строк.
//   Другий параметр визначає кліькіть ячеєк в кожній строці.
//   Третій параметр визначає елемент в який потрібно таблицю додати.
/*
let form = document.getElementById('tabl')
let but = document.getElementById('next')
but.onclick = () =>{
    let row = form.row.value
    console.log(row);
    let line = form.line.value
    let in1 = form.in.value
    let in2 = document.getElementById(in1)
    for (let i = 0; i < row; i++) {
        for(let j = 0; j < line;j++){
            let div1 = document.createElement('div')
            div1.classList.add('col')
            in2.appendChild(div1)

        }
       // in2.innerHTML = '<br>'
       // document.write('<br')
        document.write('\n')
    }
}

 */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let images = document.getElementsByClassName('im')
for(let i = 1; i < images.length;i++){
    images[i].hidden = true
}
console.log(images.length);
let but = document.getElementById('ima')
let c = 0
but.next1.onclick = (e) =>{
      e.preventDefault()
        if (c < images.length) {
            images[c].hidden = true
            c++
            images[c].hidden = false

    }
    but.before1.onclick = (e) =>{
            e.preventDefault()

            images[c].hidden = true
            c--
        images[c].hidden = false

    }
}


