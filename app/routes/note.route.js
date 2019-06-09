module.exports = (app) => {
  const notes = require('../controllers/note.controller');

  //Create new note
  app.post('/notes', notes.create);

  //Get all notes
  app.get('/notes', notes.findAll);

  //Get single note with noteId
  app.get('/notes/:noteId', notes.findOne);

  //Update note with note ID
  app.put('/note/:noteId', notes.update);

  //delete Note
  app.delete('/note/:noteId', notes.delete);

}