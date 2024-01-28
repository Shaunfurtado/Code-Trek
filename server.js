import express from 'express';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import shortid from 'shortid';
import cors from 'cors';
import process from 'process';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ problems: [] }).write();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/problems', (req, res) => {
  const problems = db.get('problems').map(problem => ({
    id: problem.id,
    problemNumber: problem.problemNumber,
    problemName: problem.problemName,
    solvedDate: problem.solvedDate,
    platformName: problem.platformName,
    problemLink: problem.problemLink,
    problemStatement: problem.problemStatement,
    solution: problem.solution
  })).value();
  res.json(problems);
});

app.post('/problems', (req, res) => {
  const problem = req.body;
  problem.id = shortid.generate();
  problem.problemNumber = req.body.problemNumber;
  problem.problemName = req.body.problemName;
  problem.solvedDate = req.body.solvedDate;
  problem.platformName = req.body.platformName;
  problem.problemLink = req.body.problemLink;
  problem.problemStatement = req.body.problemStatement;
  problem.solution = req.body.solution;
  db.get('problems').push(problem).write();
  res.json(problem);
});

app.put('/problems/:problemNumber', (req, res) => {
  const updatedProblem = db.get('problems').find({ problemNumber: req.params.problemNumber }).assign(req.body).write();
  res.json(updatedProblem);
});

app.delete('/problems/:problemNumber', (req, res) => {
  db.get('problems').remove({ problemNumber: req.params.problemNumber }).write();
  res.json({ problemNumber: req.params.problemNumber });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));