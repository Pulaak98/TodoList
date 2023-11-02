const btn = document.querySelector(`button`);
const inputBox = document.querySelector(`#input-box`);
const listContainer = document.querySelector(`#list-container`);

btn.addEventListener(`click`, () => {
    AddList();
});

listContainer.addEventListener(`click`, (e) => {
    if (e.target.tagName === `LI`) {
        e.target.classList.toggle(`checked`);
        SaveData();
    } else if (e.target.tagName === `SPAN`) {
        e.target.parentElement.remove();
        SaveData();
    }
});

ShowData();

function AddList() {
    if (inputBox.value === '') {
        alert(`value needed`);
    }
    else {
        let list = document.createElement(`li`);
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement(`span`);
        span.innerHTML = `\u00d7`;
        list.appendChild(span);
    }
    inputBox.value = ``;
    SaveData();
}

function SaveData() {
    localStorage.setItem = (`data`, listContainer.innerHTML);
}

function ShowData() {
    listContainer.innerHTML = localStorage.getItem(`data`);
}

