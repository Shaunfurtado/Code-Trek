import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import shortid from 'shortid';
import cors from 'cors';
import bodyParser from 'body-parser';
import process from 'process';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ problems: [] }).write();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Fetch all problems
app.get('/problems', (req, res) => {
  const problems = db.get('problems').value();
  res.json(problems);
});

// Create a new problem
app.post('/problems', (req, res) => {
  const problem = req.body;
  problem.id = shortid.generate();
  db.get('problems').push(problem).write();
  res.json(problem);
});

// Update a problem
app.put('/problems/:id', (req, res) => {
  const updatedProblem = db.get('problems').find({ id: req.params.id }).assign(req.body).write();
  res.json(updatedProblem);
});

// Delete a problem
app.delete('/problems/:id', (req, res) => {
  db.get('problems').remove({ id: req.params.id }).write();
  res.json({ id: req.params.id });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
