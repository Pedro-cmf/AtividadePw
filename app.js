class Expense {
    constructor(category, amount, date, description) {
        this.category = category;
        this.amount = amount;
        this.date = date;
        this.description = description;
    }
}

// Função para cadastrar gasto
function cadastrarGasto() {
    var gasto_category = document.getElementById('category').value;
    var gasto_amount = document.getElementById('amount').value;
    var gasto_date = document.getElementById('date').value;
    var gasto_description = document.getElementById('description').value;

    var dados = JSON.parse(localStorage.getItem('dados_gastos'));

    if (dados == null) {
        localStorage.setItem('dados_gastos', '[]');
        dados = [];
    }

    var registro = new Expense(gasto_category, gasto_amount, gasto_date, gasto_description);

    dados.push(registro);

    localStorage.setItem('dados_gastos', JSON.stringify(dados));

    listarGastos(); // Chama a função para listar os gastos após cadastrar um novo
}

// Função para listar gastos
function listarGastos() {
    var dados = JSON.parse(localStorage.getItem('dados_gastos'));
    var listaGastos = document.getElementById('expenses-list');
    listaGastos.innerHTML = ''; // Limpa a lista antes de adicionar os itens

    if (dados !== null) {
        dados.forEach(function(gasto, index) {
            var listItem = document.createElement('div');
            listItem.classList.add('expense-item');
            listItem.innerHTML = `
                <p><strong>Categoria:</strong> ${gasto.category}</p>
                <p><strong>Valor:</strong> ${gasto.amount}</p>
                <p><strong>Data:</strong> ${gasto.date}</p>
                <p><strong>Descrição:</strong> ${gasto.description}</p>
                <button onclick="editarGasto(${index})" class="btn btn-secondary">Editar</button>
                <button onclick="apagarGasto(${index})" class="btn btn-danger">Apagar</button>
            `;
            listaGastos.appendChild(listItem);
        });
    }
}

// Função para editar um gasto
function editarGasto(index) {
    var dados = JSON.parse(localStorage.getItem('dados_gastos'));
    var editedExpense = dados[index];
    
}

// Função para apagar um gasto
function apagarGasto(index) {
    var dados = JSON.parse(localStorage.getItem('dados_gastos'));
    dados.splice(index, 1); // Remove o gasto do array
    localStorage.setItem('dados_gastos', JSON.stringify(dados)); // Atualiza os dados no localStorage
    listarGastos(); // Atualiza a lista de gastos na tela
}

// Função para filtrar gastos por categoria
function filtrarPorCategoria() {
    var categoriaSelecionada = document.getElementById('filter-category').value;
    var dados = JSON.parse(localStorage.getItem('dados_gastos'));
    var listaFiltrada = dados.filter(function(gasto) {
        return categoriaSelecionada === '' || gasto.category === categoriaSelecionada;
    });
    var listaGastos = document.getElementById('expenses-list');
    listaGastos.innerHTML = ''; // Limpa a lista antes de adicionar os itens filtrados

    listaFiltrada.forEach(function(gasto, index) {
        var listItem = document.createElement('div');
        listItem.classList.add('expense-item');
        listItem.innerHTML = `
            <p><strong>Categoria:</strong> ${gasto.category}</p>
            <p><strong>Valor:</strong> ${gasto.amount}</p>
            <p><strong>Data:</strong> ${gasto.date}</p>
            <p><strong>Descrição:</strong> ${gasto.description}</p>
            <button onclick="editarGasto(${index})" class="btn btn-secondary">Editar</button>
            <button onclick="apagarGasto(${index})" class="btn btn-danger">Apagar</button>
        `;
        listaGastos.appendChild(listItem);
    });
}

// Função para executar após o carregamento da página
window.onload = function() {
    listarGastos(); // Chama a função para listar os gastos ao carregar
};