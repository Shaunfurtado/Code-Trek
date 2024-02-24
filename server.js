import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import shortid from 'shortid';
// import process from 'process';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Load environment variables
// import dotenv from 'dotenv';
// dotenv.config();

// MongoDB connection string
const uri = 'mongodb+srv://rockfurtadofur:14iTAcjjliMlKbuO@cluster0.zys5toa.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const problemSchema = new mongoose.Schema({
  problemNumber: String,
  problemName: String,
  solvedDate: String,
  platformName: String,
  problemLink: String,
  problemStatement: String,
  quickNote: String,
  solution: String,
  
});

const Problem = mongoose.model('Problem', problemSchema);

// Fetch all problems
app.get('/problems', async (req, res) => {
  try {
    const problems = await Problem.find();
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new problem
app.post('/problems', async (req, res) => {
  const problemData = req.body;
  problemData.id = shortid.generate();

  const problem = new Problem(problemData);

  try {
    await problem.save();
    res.status(200).json({ problem, message: 'Problem submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a problem
app.put('/problems/:id', async (req, res) => {
  try {
    const updatedProblem = await Problem.findOneAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.json(updatedProblem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a problem
app.delete('/problems/:id', async (req, res) => {
  try {
    await Problem.findByIdAndDelete(req.params.id); // Change to findByIdAndDelete
    res.json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


