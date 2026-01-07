import express from 'express';
import { data } from './data';
import cors from 'cors';
const PORT = 1337;
const app = express();

app.use(cors());
app.get('/get-products', (req, res) => {
  res.json(data.products);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
