import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(Date(), req.method, req.path);
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

app.get('/', (req, res, next) => {
  res.send('/');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('/notes');
  next();
});

app.post('/notes/:noteId', (req, res, next) => {
  const { noteId } = req.params;
  res.send(`/notes/${noteId}`);
  console.log('noteId:', noteId);
  next();
});
