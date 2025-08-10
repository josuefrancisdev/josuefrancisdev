## Hi there 👋

<!--
**josuefrancisdev/josuefrancisdev** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Calculadora de Orçamento Pessoal</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 40px auto;
      padding: 20px;
      background: #f4f4f4;
      border-radius: 8px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
      color: #555;
    }
    input[type="number"] {
      width: 100%;
      padding: 8px;
      margin-top: 6px;
      border-radius: 4px;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
    button {
      margin-top: 20px;
      width: 100%;
      padding: 10px;
      background-color: #0066cc;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }
    button:hover {
      background-color: #004999;
    }
    #resultado {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #222;
      min-height: 30px;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Calculadora de Orçamento Pessoal</h1>
  <label for="receita">Receita Mensal (R$):</label>
  <input type="number" id="receita" placeholder="Digite sua receita" />

  <label for="despesas">Despesas Mensais (R$):</label>
  <input type="number" id="despesas" placeholder="Digite suas despesas" />

  <button onclick="calcular()">Calcular Saldo</button>

  <div id="resultado"></div>

  <script>
    function calcular() {
      const receita = parseFloat(document.getElementById('receita').value);
      const despesas = parseFloat(document.getElementById('despesas').value);
      const resultado = document.getElementById('resultado');

      if (isNaN(receita) || isNaN(despesas)) {
        resultado.style.color = 'red';
        resultado.textContent = 'Por favor, insira números válidos em ambos os campos.';
        return;
      }

      const saldo = receita - despesas;

      if (saldo > 0) {
        resultado.style.color = 'green';
        resultado.textContent = `Ótimo! Seu saldo positivo é R$ ${saldo.toFixed(2)}`;
      } else if (saldo === 0) {
        resultado.style.color = 'orange';
        resultado.textContent = 'Seu saldo está zerado, cuidado com os gastos!';
      } else {
        resultado.style.color = 'red';
        resultado.textContent = `Atenção! Você está no vermelho em R$ ${Math.abs(saldo).toFixed(2)}`;
      }
    }
  </script>
</body>
</html>
