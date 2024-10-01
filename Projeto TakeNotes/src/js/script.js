const notesContainer = document.querySelector("#notes-container")
const noteInput = document.getElementById("note-content")
const addNoteBtn = document.querySelector(".add-note")

// Funções
function addNote(){
    const noteInput = document.querySelector("#note-content");

  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false,
  };

  const noteElement = createNote(noteObject.id, noteObject.content);

  notesContainer.appendChild(noteElement);
  console.log('aqui dentro')

}

console.log('aqui fora')

function creatNote(id, content, fixed){
    const element = document.createElement("div")
    const noteInput = document.querySelector("#note-content");
    element.classList.add('note')
    
    const textarea = document.createElement('textarea')
    textarea.value = content
    textarea.placeholder = "Adicione algum texto..."

    element.appendChild(textarea);
}

// CRIANDO ID ALEATORIOS

function genereteId() {
    return Math.floor(Math.random() * 5000)
}
// Eventos

addNoteBtn.addEventListener("click", () => addNote())

