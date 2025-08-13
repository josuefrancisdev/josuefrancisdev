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
const listaItens = document.getElementById("lista-itens");
const totalGeral = document.getElementById("total-geral");
const btnAdicionar = document.getElementById("adicionar");

let itens = [];

function atualizarTabela() {
    listaItens.innerHTML = "";
    let total = 0;

    itens.forEach((item, index) => {
        let subtotal = item.quantidade * item.preco;
        total += subtotal;

        listaItens.innerHTML += `
            <tr>
                <td>${item.descricao}</td>
                <td>${item.quantidade}</td>
                <td>R$ ${item.preco.toFixed(2)}</td>
                <td>R$ ${subtotal.toFixed(2)}</td>
                <td>
                    <button onclick="removerItem(${index})">Remover</button>
                </td>
            </tr>
        `;
    });

    totalGeral.textContent = total.toFixed(2);
}

function removerItem(index) {
    itens.splice(index, 1);
    atualizarTabela();
}

btnAdicionar.addEventListener("click", () => {
    const descricao = document.getElementById("descricao").value.trim();
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const preco = parseFloat(document.getElementById("preco").value);

    if (descricao && quantidade > 0 && preco >= 0) {
        itens.push({ descricao, quantidade, preco });
        document.getElementById("descricao").value = "";
        document.getElementById("quantidade").value = "";
        document.getElementById("preco").value = "";
        atualizarTabela();
    } else {
        alert("Preencha todos os campos corretamente!");
    }
});
