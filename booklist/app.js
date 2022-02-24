const formElem = document.getElementById("form");
const books = [];

class Book {
    constructor(data) {
        this.title = data.title;
        this.author = data.author;
        this.isbn = data.isbn;
    }
}

formElem.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const book = new Book(formProps);
    books.push(book);
    updateUI(books);
});

document.addEventListener("DOMContentLoaded", () => updateUI(books));

function updateUI(books) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    books.forEach((book, index) => {
        const tr = document.createElement("tr");

        Object.keys(book).forEach((element) => {
            const td = document.createElement("td");
            td.innerText = book[element];
            tr.appendChild(td);
        });
        // delete button
        const td = document.createElement("td");
        td.innerText = "X";
        td.addEventListener("click", () => {
            books.splice(index, 1);
            updateUI(books);
        });
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
}