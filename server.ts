import express from 'express';
import { data } from './data';
import cors from 'cors';
const PORT = 1337;
const app = express();

app.use(cors());
app.get('/get-products', (req, res) => {
  const { searchText } = req.query;

  if (searchText && typeof searchText === 'string') {
    const filteredData = data.products.filter((product: any) => 
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    res.json(filteredData);
  } else {
    res.json(data.products);
  }
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
