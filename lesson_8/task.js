//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
/*
let area = document.getElementById('formArea')
  let text = area.textArea.value.target
    console.log(text);
area.textArea.oninput = (e) => {
    e.preventDefault()
    let text = e.target.value
    localStorage.setItem('text', text)
}
area.textArea.value = localStorage.getItem('text')
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////

//- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.
/*
let form = document.getElementById('bigForm')
form.oninput = (e) =>{
    e.preventDefault()
    localStorage.setItem('name', e.target.form.name.value)
    localStorage.setItem('second_name', e.target.form.secondName.value)
    localStorage.setItem('age', e.target.form.age.value)
    localStorage.setItem('radio', e.target.form.radio.value)
    localStorage.setItem('email', e.target.form.email.value)
    localStorage.setItem('country', e.target.form.selectCountry.value)
    localStorage.setItem('check1', e.target.form.check1.checked)
    localStorage.setItem('check2', e.target.form.check2.checked)
    localStorage.setItem('check3', e.target.form.check3.checked)

}
form.name.value = localStorage.getItem('name')
form.secondName.value = localStorage.getItem('second_name')
form.age.value = localStorage.getItem('age')
form.radio.value = localStorage.getItem('radio')
form.email.value = localStorage.getItem('email')
form.selectCountry.value = localStorage.getItem('country')
form.check1.checked = localStorage.getItem('check1')
form.check2.checked = localStorage.getItem('check2')
form.check3.checked = localStorage.getItem('check3')

 */







//-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
/*
const input = 'input'
let index = 0
let area = document.getElementById('textSave')
if(!localStorage.getItem(input)){
    localStorage.setItem(input, JSON.stringify([]))
}
area.Save.onclick = (e)=>{
    e.preventDefault()
    localStorage.setItem('now', area.area.value)
    let arr = JSON.parse(localStorage.getItem(input))
    arr.push(area.area.value)
    localStorage.setItem(input, JSON.stringify(arr))
    index++
}
area.area.value = localStorage.getItem('now')
area.Back.onclick = (ev) =>{
    ev.preventDefault()
    let arr = JSON.parse(localStorage.getItem(input))
    if(index - 1 >= 0){
        index--
    }
    else{
        index = arr.length - 1
    }
    area.area.value = arr[index]
}
area.Next.onclick = (e) =>{
     e.preventDefault()
    let arr = JSON.parse(localStorage.getItem(input))
    if(index + 1 < arr.length){
        index++
    }
    else{
        index = 0
    }
    area.area.value = arr[index]
}

 */

////////////////////////////////////////////////////////////////////
//- Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта

const input = 'Input'
let index = 0
let form = document.getElementById('formUser')
let filldata = (obj, target)=>{
    for (const tag of target) {


        tag.value = obj[tag.name]
    }
}
if(!localStorage.getItem(input)){
    localStorage.setItem(input, JSON.stringify([]))
}
form.add.onclick=(e)=>{
    e.preventDefault()
    let obj = {}
    for (const tag of form) {
        obj[tag.name] = tag.value
    }
    let db = JSON.parse(localStorage.getItem(input))
    db.push(obj)
    localStorage.setItem(input, JSON.stringify(db))
}
form.Back.onclick=(ev)=>{
ev.preventDefault()
    let arr = JSON.parse(localStorage.getItem(input))
    if(index - 1 >= 0){
        index--
    }
    else{
        index = arr.length - 1
    }
    let obj = arr[index]
    filldata(obj, form)
}
form.Forward.onclick=(ev)=>{
ev.preventDefault()
    let arr = JSON.parse(localStorage.getItem(input))
    if(index + 1 < arr.length){
        index++
    }
    else{
        index = 0
    }
    let obj = arr[index]
    filldata(obj, form)
}
form.Delete.onclick=(ev)=>{
    ev.preventDefault()
    let arr = JSON.parse(localStorage.getItem(input))
    let newArr = arr.filter((obj, index1) => index1 !== index)
    localStorage.setItem(JSON.stringify(newArr))
    document.location.reload()
}