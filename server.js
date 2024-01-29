import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import shortid from 'shortid';
import cors from 'cors';
import bodyParser from 'body-parser';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ problems: [] }).write();

const app = express();
const port = 5173;

app.use(cors());
app.use(bodyParser.json());
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
  res.status(200).json({ message: 'Problem submitted successfully!' });
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});