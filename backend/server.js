const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const anamneseRoutes = require('./routes/anamnese');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/anamnese', anamneseRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});