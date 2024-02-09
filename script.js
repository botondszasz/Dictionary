const saveButton = document.getElementById("save-button");
const searchButton = document.getElementById("search-button");
const wordInput = document.getElementById("word-input");
let wordList = [];

function addWord() {
  wordList.push(document.getElementById("word-input").value) - 1;
  document.getElementById("word-input").value = '';
}

function searchForWord() {
    if(wordList.includes(document.getElementById("word-input").value)) {
        alert("This word is in the dictionary.");
        document.getElementById("word-input").value = '';
    } else {
        alert("This word is not in the dictionary.");
    }
}

wordInput.addEventListener('keydown', function(event){
    if (event.key === "Enter") {
        addWord()
    } else if(event.key === "Shift") {
        searchForWord()
    }
});
