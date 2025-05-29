const express = require('express');
const router = express.Router();
const pool = require('../db');
const nlp = require('../nlp');

router.post('/', async (req, res) => {
  const { entradaVoz } = req.body;
  const campos = nlp(entradaVoz);
  try {
    await pool.query(
      'INSERT INTO anamnese (texto, queixa, tempo) VALUES ($1, $2, $3)',
      [entradaVoz, campos.queixa, campos.tempo]
    );
    res.json({ message: 'Dados salvos com sucesso!', campos });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar dados' });
  }
});

module.exports = router;