import React, { useState } from 'react';
import { enviarAnamnese } from './api';

const App = () => {
  const [texto, setTexto] = useState('');
  const [resposta, setResposta] = useState('');

  const iniciarReconhecimento = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Navegador não suporta reconhecimento de voz.');
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const resultado = event.results[0][0].transcript;
      setTexto(resultado);
    };
    recognition.start();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dados = {
      entradaVoz: texto,
      camposExtraidos: {
        queixa: texto.includes('dor') ? 'dor' : 'não especificado',
        tempo: texto.includes('dias') ? 'dias' : 'não mencionado',
      },
    };
    const resposta = await enviarAnamnese(dados);
    setResposta(resposta.message);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Anamnese via Reconhecimento de Voz</h1>
      <button onClick={iniciarReconhecimento}>🎤 Falar</button>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          cols="50"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {resposta && <p><strong>Servidor:</strong> {resposta}</p>}
    </div>
  );
};

export default App;