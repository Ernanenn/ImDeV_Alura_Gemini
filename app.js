// Função responsável por pesquisar dados e exibir os resultados em uma seção HTML.
function pesquisar() {

  // Obtém a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o campo do imput onde o usuário digita o termo de sua pesquisa.
  let campoPesquisa = document.getElementById("campo-pesquisa").value

  if (campoPesquisa == "") {
    section.innerHTML = "<p><b>Não encontramos resultados.</b></p>"
    return
  }

  // Inicializa uma string para armazenar os resultados formatados em HTML.
  let resultados = "";

  // Itera sobre cada dado na lista de dados.
  for (let dado of dados) {

    // Se a palavra pesquisada estiver no título ou na descrição.
    if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) {

      // Cria um elemento HTML <div> para cada resultado.
      resultados += `
    <div class="item-resultado">
      <h2>
        <a href="#" target="_blank"> ${dado.titulo}</a>
      </h2>
      <p class="descricao-meta"> ${dado.descricao}</p> 
      <a href= ${dado.link} target = "_blank"> Mais informações</a>
    </div>`
    }
  };

  // Atribui resposta para variável se ela nao existir no banco de dados.
  if (!resultados) {
    resultados = `<p><b>Ops! Não encontramos resultados para ${campoPesquisa}.</p><p>Tente usar outras palavras-chave ou verifique a ortografia.</b></p>`

  };

  // Atribui o HTML gerado à seção de resultados.
  section.innerHTML = resultados;
};