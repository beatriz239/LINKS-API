// Função para buscar a cotação do dólar e atualizar o DOM
function atualizarCotacaoDolar() {
    fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
        .then(resposta => resposta.json())
        .then(economia => {
            // Atualiza os elementos do DOM com as informações da resposta
            document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
            document.getElementById('menorValor').innerHTML = economia.USDBRL.low;
            document.getElementById('maiorValor').innerHTML = economia.USDBRL.high;

            // Loga a resposta para depuração
            console.log(economia);
        })
        .catch(error => {
            // Trata erros na chamada da API
            console.error('Erro ao buscar a cotação do dólar:', error);
        });
}

// Chama a função para atualizar a cotação
atualizarCotacaoDolar();
