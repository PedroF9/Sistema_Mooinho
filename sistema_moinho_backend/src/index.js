import express from 'express';
import cors from 'cors';
import colaboradorRoute from './routes/colaboradorRoute.js';
import especialidadeRoute from './routes/especialidadeRoute.js';

const app = express();
const port = 3000;


app.use(cors()); 
app.use(express.json());

app.use('/c', colaboradorRoute);
app.use('/e', especialidadeRoute);


/*app.use('/', (req, res) => {
    res.send('<h1>Backend</h1>');
});*/


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

