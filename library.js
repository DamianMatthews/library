let myLibrary = [];

// function Book (title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
//     this.info = function () {
//       return `${title} by ${author}, ${pages} pages`;
//       }
//   }  
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}
 
function addBookToLibrary () {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = "read" ;
    return new Book(title, author, pages, read);
}

const book1 = new Book("Bali","Jack Chiller","50","read")
const book2 = new Book("Malta","Jackie Chan","250","read")

// console.log(book1);

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
    myLibrary.push(addBookToLibrary()), 
    showBooks(), 
    closeForm()
});

// myLibrary.push(book1);
// myLibrary.push(book2);

function showBooks () {
// for (i=0; i<myLibrary.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.classList = "card";
    cardContainer.id = "card";
    bottom.appendChild(cardContainer);

    const readContainer = document.createElement("p");
    cardContainer.appendChild(readContainer);

    const readButton = document.createElement("button");
    readButton.textContent = "READ";
    readButton.classList = "readButton";
    readContainer.appendChild(readButton);

    const bookInfo = document.createElement("h1");
    // bookInfo.textContent = "Book Info";
    cardContainer.appendChild(bookInfo);

    const bookDisplay = document.createElement("h1");
    bookDisplay.textContent = myLibrary[myLibrary.length-1].info();
    cardContainer.appendChild(bookDisplay);

    const removeContainer = document.createElement("p");
    cardContainer.appendChild(removeContainer);

    const removeButton = document.createElement("button");
    removeButton.textContent = "REMOVE";
    removeButton.id = myLibrary[myLibrary.length-1].title;
    removeButton.classList = "cardButton";
    removeContainer.appendChild(removeButton);

    removeButton.addEventListener("click", function (e){
        console.log(e.target.id);
        // console.log(myLibrary[myLibrary.length-1].title);
        for (i=0; i<myLibrary.length; i++) {
            if(e.target.id === myLibrary[i].title) {
                myLibrary.pop();
                bottom.removeChild(cardContainer);
        } else {
            bottom.removeChild(cardContainer);
        }
       }
    });

    readButton.addEventListener("click", function(e) {
        if (readButton.innerText === "READ") {
            cardContainer.style.background = "lightsteelblue";
            readButton.textContent = "NOT READ";
        } else if (readButton.innerText === "NOT READ") {
            cardContainer.style.background = "white";
            readButton.textContent = "READ";
        }
    });
// }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



