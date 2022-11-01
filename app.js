const addBtn = document.querySelector('button')

const input = document.getElementsByName('input')[0];
const list = document.getElementsByClassName('list')[0];


addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.code != 'Enter') {
        return
    }
    addTask(e)
});


function addTask(e) {

    const currentTask = input.value;
    if (currentTask == '') {
        alert('Please fill your task!')
        return
    }

    const div = document.createElement('div');
    div.classList.add('task')
    const li = document.createElement('li');
    li.classList.add('item');
    const checkBtn = document.createElement('button')
    checkBtn.classList.add('check')
    checkBtn.textContent = 'check';

    checkBtn.addEventListener('click', (e) => {
        // li.classList.add('marked');
        // checkBtn.textContent = 'done';
        div.classList.toggle('fall');
        div.addEventListener('transitionend', () => {
            div.remove();
        })
        footerAdd(currentTask, 'finishedList')

    });

    const deleteBtn = document.createElement('button');
    deleteBtn.addEventListener('click', (e) => {
        div.classList.toggle('fall');
        div.addEventListener('transitionend', () => {
            div.remove();
        })
        footerAdd(currentTask, 'deletedList')
    });

    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'delete';
    li.textContent = currentTask;

    div.appendChild(li);
    div.appendChild(checkBtn)
    div.appendChild(deleteBtn)
    list.appendChild(div)

    input.value = ''
}

function footerAdd(task, section) {
    const removedOrFinished = document.querySelector(`ul[class="${section}"]`)
    const li = document.createElement('li');
    if (section == 'finishedList') {
        li.classList.add('marked');
    } else {
        li.style.color = 'red';
    }
    li.textContent = task;
    removedOrFinished.appendChild(li)
}