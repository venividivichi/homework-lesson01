
class TodoList {
  constructor() {
    this.notes = [];
  }

  addNote(textNote) {
    if (textNote.trim() !== '') {
      const note = {
        note_cmplt_st: false,
        text: textNote
      };
      this.notes.push(note);
    } else {
      console.log('Note can`t be empty!');
    }
  }

  deleteNote(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes.splice(index, 1);
    } else {
      console.log('Note with index ' + index +  ' not found!');
    }
  }

  editNote(newStatus, newNoteText, index) {
    if (index >= 0 && index < this.notes.length) {
     
      if (newNoteText.trim() != '') {
        this.notes[index].text = newNoteText;
      } else {
        console.log('Note can`t be empty!')
      }

      if (typeof newStatus === 'boolean') {
        this.notes[index].note_cmplt_st = newStatus;
      } 

    } else {
      console.log('Error with edit note! Note with index ' + index + ' not found!');
    }
  }

  getNoteAllInfo(index) {
    if (index >= 0 && index < this.notes.length) {
      return `
        Note status: ${this.notes[index].note_cmplt_st}
        Task: ${this.notes[index].text}
      `
    } else {
      console.log('Note with index ' + index + ' not found!');
    }
  }

  getAllNotes() {
    return this.notes;
  }

  getAllNotesByList() {
  if (this.notes.length === 0) {
      console.log('Notes list empty.');
    } else {
      console.log('Notes list:');
        this.notes.forEach((note, index) => {
        console.log(`${index + 1}. Status: ${note.note_cmplt_st}, task: ${note.text}`);
      });
    }
  }

  getCountOfAllNotes() {
    return this.notes.length;
  }

  getCountOfUncompletedNotes() {
    return this.notes.filter((note) => !note.note_cmplt_st).length;
  }

  markNoteAsCompleted(index) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].note_cmplt_st = true;
    } else {
      console.log('Note with index ' + index + ' not found!');
    }
  }

}

let myTodoList = new TodoList();

myTodoList.addNote('Wash my face');
myTodoList.addNote('Make breakfast');
myTodoList.addNote('Walk the dog'); 
myTodoList.addNote('Some to change ...'); 
myTodoList.addNote('Take a shower'); 

console.log('Note info: ', myTodoList.getNoteAllInfo(2));

console.log('All notes (like Object): ', myTodoList.getAllNotes());
console.log('All notes count: ' + myTodoList.getCountOfAllNotes())
console.log('Count of unfinished notes: ' + myTodoList.getCountOfUncompletedNotes())

myTodoList.editNote(true, 'Lie down few minutes', 3);

//myTodoList.deleteNote(3);

myTodoList.markNoteAsCompleted(0);
console.log('--------- after changes ---------');
console.log('Count of unfinished notes: ' + myTodoList.getCountOfUncompletedNotes())
console.log('------------------');
console.log(myTodoList.getAllNotesByList())