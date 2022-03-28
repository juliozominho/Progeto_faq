// BUSCAR OS ITENS DA TELA
var itensPerguntasERespostas = document.querySelectorAll('.item');

// ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function(){
        // VERIFICAR SE A PERGUNTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')

        // SE A PERGUNTA NÃO ESTA ATIVA
        if (estaAtiva === false){
            // EU PRECISO FECHAR TODAS
            itensPerguntasERespostas.forEach(function(item){
                item.classList.remove('ativo')
            })

            // ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')
        } else{
            item.classList.remove('ativo')
        }
    })
})