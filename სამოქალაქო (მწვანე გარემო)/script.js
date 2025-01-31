
// const btn1 = document.getElementById('btn');
// const quize = document.getElementById('quizDiv')
// const quizParent = document.getElementById('quizParent');
// const btn2 = document.getElementById('btn2');

// btn1.addEventListener('click', () => {
//     quize.style.display = 'block';
//     quizParent.style.backgroundColor = 'rgb(100, 99, 99);'
// })

// btn2.addEventListener('click', () => {
//     quize.style.display = 'non';
// })

const btn1 = document.getElementById('btn');
const quize = document.getElementById('quizDiv');
const quizParent = document.getElementById('quizParent');
const btn2 = document.getElementById('btn2');
const quizForm = document.getElementById('quizForm');
const dataTable = document.getElementById('dataTable').querySelector('tbody');

window.addEventListener('load', () => {
    loadTableData();
});

btn1.addEventListener('click', () => {
    quize.style.display = 'block';
});

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('inp1').value;
    const surname = document.getElementById('inp2').value;
    const problem = document.getElementById('inp3').value;

    if (name && surname && problem) {
        addDataToLocalStorage({ name, surname, problem });
        addRowToTable({ name, surname, problem });
        quizForm.reset();
        quize.style.display = 'none';
    } else {
        alert('გთხოვთ შეავსეთ ყველა ველი.');
    }
});

function addDataToLocalStorage(data) {
    let existingData = JSON.parse(localStorage.getItem('quizData')) || [];
    existingData.push(data);
    localStorage.setItem('quizData', JSON.stringify(existingData));
}

function loadTableData() {
    const storedData = JSON.parse(localStorage.getItem('quizData')) || [];
    storedData.forEach(data => addRowToTable(data));
}

function addRowToTable({ name, surname, problem }) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${problem}</td>
    `;
    dataTable.appendChild(row);
}
