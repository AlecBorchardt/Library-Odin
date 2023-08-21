

//book stuff
let myLibrary = []

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

let addBookToLibrary = function() {
    //create book object
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let book = new Book(title, author, pages);
 
    //add book object to array
    myLibrary.push(book);

    //create <li>
    let ol = document.getElementById("list");
    let li = document.createElement("li");

let delet = document.createElement("button");
let ecks = document.createTextNode("X");
delet.appendChild(ecks);

let remove = function(){
  li.remove();
}

delet.addEventListener("click", remove);
li.appendChild(delet);

    let p1 = document.createElement("p");
    p1.classList += "p1";
    let p2 = document.createElement("p");
    p2.classList += "p2";
    let p3 = document.createElement("p");
    p3.classList += "p3";

    let juice = document.createTextNode(`"${title}"`);
    let juice2 = document.createTextNode(`by: ${author}.`);
    let juice3 = document.createTextNode(`Length: ${pages} pages.`);

    p1.appendChild(juice);
    p2.appendChild(juice2);
    p3.appendChild(juice3);

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    //create toggle for read
    function toggle() {
      let label = document.createElement("label");
      let input = document.createElement("input");
      let span = document.createElement("span");
      let ol = document.getElementById("list");
      label.classList.add("switch");
      input.type = "checkbox";
      span.classList.add("slider");
      span.classList.add("round");
      label.appendChild(input);
      label.appendChild(span);
      li.appendChild(label);
      ol.appendChild(li);
    };
    toggle();

    //add <li> to <ol>
    ol.appendChild(li);
}

let submit = document.getElementById("submit");
submit.addEventListener("click", addBookToLibrary);

//to do
//Add a button on each book’s display to remove the book from the library.
//Add a button on each book’s display to change its read status.

let newBook = document.getElementById("new-book");
let form = document.querySelector("dialog");

let open = function(){
  form.show();
}

newBook.addEventListener("click", open);

let closer = document.getElementById("close-dialog");

let close = function(){
  form.close();
}

closer.addEventListener("click", close);