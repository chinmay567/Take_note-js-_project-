// console.log("hey this is my first project");
showNotes()
// if user add a note add it to the localstorage
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById('addTxt')
  let addTitle = document.getElementById('addTitle')
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesobj = []
  }
  else {
    notesobj = JSON.parse(notes)

  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesobj.push(myObj)
  localStorage.setItem('notes', JSON.stringify(notesobj))
  addTxt.value = ''
  addTitle.value = ''
  console.log(notesobj);
  showNotes()
})

// fundtion to show read element
function showNotes() {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesobj = []
  } else {
    notesobj = JSON.parse(notes)
  }
  let html = ''
  notesobj.forEach(function (element, index) {
    html += ` <div class="noteCard my-2 mx-2 card"    style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <button id = "${index}"onclick ="deleteNote (this.id)" class="btn btn-primary">Delete</button>
      </div>
    </div> `

  })
  let notesElm = document.getElementById('notes')
  if (notesobj.length != 0) {
    notesElm.innerHTML = html
  }
  else {
    notesElm.innerHTML = ` Nothing To show please add some Note`
  }
};

// function to delete the note
function deleteNote(index) {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    notesobj = []
  } else {
    notesobj = JSON.parse(notes)
  }
  notesobj.splice(index, 1)
  localStorage.setItem('notes', JSON.stringify(notesobj))
  showNotes()
}

// search for the note
let search = document.getElementById('searchTxt')
search.addEventListener('input', function () {
  let inputval = search.value.toLowerCase()
  // console.log('input event fired');
  let noteCards = document.getElementsByClassName('noteCard')
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName('p')[0].innerText
    if (cardTxt.includes(inputval)) {
      element.style.display = 'block'
    }
    else {
      element.style.display = 'none'
    }
    // console.log(cardTxt);

  })
})