import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 5000;

dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
})

app.listen(PORT, (req, res) =>{
    console.log(`Listening on port ${PORT}`);
})