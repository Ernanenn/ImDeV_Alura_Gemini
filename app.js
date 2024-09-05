// Função responsável por pesquisar dados e exibir os resultados em uma seção HTML.
function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string para armazenar os resultados formatados em HTML.
    let resultados = "";

    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {

        // Cria um elemento HTML <div> para cada resultado.
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank"> ${dado.titulo}</a>
          </h2>
          <p class="descricao-meta"> ${dado.descricao}</p> 
          <a href= ${dado.link} target = "_blank"> Mais informações</a>
        </div>`
    };

    // Atribui o HTML gerado à seção de resultados.
    section.innerHTML = resultados
};


