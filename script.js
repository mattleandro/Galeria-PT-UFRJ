const btnAdicionarFuncionario = document.getElementById("btn-adicionar-funcionario");
const formFuncionario = document.getElementById("form-funcionario");
const btnSalvarFuncionario = document.getElementById("btn-salvar-funcionario");
const funcionariosContainer = document.getElementById("funcionarios-container");

let funcionarios = [];

btnAdicionarFuncionario.addEventListener("click", function() {
  formFuncionario.classList.remove("hidden");
});

btnSalvarFuncionario.addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const cargo = document.getElementById("cargo").value;
  const imagemInput = document.getElementById("imagem");

  const reader = new FileReader();
  reader.readAsDataURL(imagemInput.files[0]);
  reader.onload = function() {
    const imagem = reader.result;

    const novoFuncionario = {nome, cargo, imagem};
    funcionarios.push(novoFuncionario);

    formFuncionario.classList.add("hidden");

    exibirFuncionarios();
  };
});

function exibirFuncionarios() {
  funcionariosContainer.innerHTML = "";

  for(let i = 0; i < funcionarios.length; i++) {
    const funcionarioDiv = document.createElement("div");
    const funcionario = funcionarios[i];

    const nomeSpan = document.createElement("span");
    nomeSpan.textContent = "Nome: " + funcionario.nome;
    funcionarioDiv.appendChild(nomeSpan);

    const cargoSpan = document.createElement("span");
    cargoSpan.textContent = "Cargo: " + funcionario.cargo;
    funcionarioDiv.appendChild(cargoSpan);

    const imagemImg = document.createElement("img");
    imagemImg.src = funcionario.imagem;
    funcionarioDiv.appendChild(imagemImg);

    funcionariosContainer.appendChild(funcionarioDiv);
  }
}
