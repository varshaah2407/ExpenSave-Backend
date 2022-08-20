import mongoose from 'mongoose';
import express from 'express';
import { familyMembers } from './routes/family-members.js';
const app = express();


mongoose.connect('mongodb://localhost/householdexpenses')
.then(() => console.log('connected to MongoDB'))
.catch(err => console.error('could not connect to MongoDB: ', err));

app.use(express.json());
app.use('/api/family-members', familyMembers);

const port  = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

app.get('/', (req, res) => {
    res.send('Househould Expenses');
});