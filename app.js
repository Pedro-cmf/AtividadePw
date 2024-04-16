class Expense {
    constructor(category, amount, date, description) {
        this.category = category;
        this.valor = valor;
        this.date = date;
        this.description = description;
    }
}


function cadastrarGasto() {
    // Implementação da função
    var gasto_category = document.getElementById('category').value;
    var gasto_categoryamount = document.getElementById('valor').value;
    var gasto_categorydate = document.getElementById('date').value;
    var gasto_categorydescription = document.getElementById('description').value;

    var dados = JSON.parse(localStorage.getItem('dados_gastos'));

    if(dados == null) {
        localStorage.setItem('dados_gastos', '[]');
        dados = [];
    }

    var registro = {
        category: gasto_category.value,
        valor: gasto_categoryvalor.value,
        date: gasto_categorydate.value,
        description: gasto_categorydescription.value
    }

    dados.push(registro);

    localStorage.setItem('dados_gastos', JSON.stringify(dados));
}