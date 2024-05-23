import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './interfaces';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const tasks: {[id: string]: Task} = {};

app.post('/tasks', (req, res) => {
  const { description, status, dueDate } = req.body;
  tasks[uuidv4()] = {description, status, dueDate};
  res.status(201).json('Task was added');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks[id]
  if(task === undefined) {
    res.status(404).send('Task not found');
  }

  const { description, status, dueDate } = req.body.task;
  task.description = description || task.description;
  task.status = status || task.status;
  task.dueDate = dueDate || task.dueDate;

  res.status(200).json('Task was correctly updated');
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks[id]
  if(task === undefined) {
    res.status(404).send('Task not found');
  }
  delete tasks[id];

  res.status(200).json('Task was deleted');
});



app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
  return
});
