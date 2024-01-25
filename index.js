const axios = require("./api.js");

async function carregarEstados() {
  try {
    var response = await axios.api.get("/estados/ES");
    console.log(response.data);
  } catch (erro) {
    console.log("Ocorreu um erro ao buscar os estados");
  }
}

async function alterarEstado() {
  try {
    var response = await axios.api.put("/estados/ES", {
      nome: "Espírito Santo"
    });
  } catch (erro) {
    console.log("Ocorreu um erro ao alterar o estado");
  }
}

async function incluirEstado() {
  try {
    var response = await axios.api.post("/estados", {
      id: "ES",
      nome: "Espírito Santo"
    });

    console.log(response.data);
  } catch (erro) {
    console.log("Ocorreu um erro ao incluir o estado");
  }
}

async function deletarEstado() {
  try {
    await axios.api.delete("/estados/ES");
  } catch (erro) {
    console.log("Ocorreu um erro ao deletar o estado");
  }
}

//carregarEstados();
//alterarEstado();
//incluirEstado();
deletarEstado();
