const body = document.querySelector('#main');
const mainList = document.createElement('ul');
const input = document.querySelector('#input');

body.appendChild(mainList);

const button = document.querySelector('#add');

input.focus()

button.addEventListener('click', () => {
    let value = input.value;
    input.value = "";

    let list = document.createElement('li');
    list.classList.add("list")
    let span = document.createElement('span');
    let btn = document.createElement('button');
    btn.classList.add('btn');
    span.textContent = value;
    btn.textContent = "Delete";
    list.appendChild(span);
    list.appendChild(btn);

    mainList.appendChild(list);

    btn.addEventListener('click', () => mainList.removeChild(list));

    input.focus()
});