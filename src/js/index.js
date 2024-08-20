/*
    Objetivo - quando clicarmos no botão temos que mostrar a proxima imagem
    - passo 1: pegar o elemento HTML dos botões
    - passo 2: identificar o clique do usuário no botão
    - passo 3: desmarcar o botão selecionado anterior
    - passo 4: marcar o botão selecionado como se estivesse selecionado
    - passo 5: esconder a imagem anterior selecionada
    - passo 6: fazer aparecer a imagem correspondente ao botão clicado
    - passo 7: esconder a informação do dragão anteriormente selecionado
    - passo 8: mostrar a informação do dragão referente ao botão clicado
*/

// passo 1: pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
// passo 5:
const imagens = document.querySelectorAll('.imagem');
// passo 7:
const informacoes = document.querySelectorAll('.informacoes');

// passo 2: identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- passo 3: desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        // passo 4: marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        // passo 5: esconder a imagem anterior selecionada
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        // passo 6: fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
        //passo 7: esconder a informação do dragão anteriormente selecionado
        const informacoesAtivas = document.querySelector('.informacoes.ativa');
        informacoesAtivas.classList.remove('ativa');
        // passo 8: mostrar a informação do dragão referente ao botão clicado
        informacoes[indice].classList.add('ativa');
    });
});


