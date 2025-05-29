const nlp = (texto) => {
  const resultado = {
    queixa: texto.match(/dor|tontura|enjoo|febre/gi)?.[0] || 'não especificado',
    tempo: texto.match(/\d+\s*(dias|semanas|meses)/gi)?.[0] || 'não mencionado',
  };
  return resultado;
};
module.exports = nlp;