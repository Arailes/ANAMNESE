document.getElementById('anamneseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const output = document.getElementById('output');
  output.innerHTML = "<h2>Resumo da Anamnese:</h2><ul>";

  for (let [key, value] of formData.entries()) {
    output.innerHTML += `<li><strong>${key}:</strong> ${value}</li>`;
  }

  output.innerHTML += "</ul>";
});
