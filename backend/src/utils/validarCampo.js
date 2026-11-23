const validarCampo = (valor, nomeCampo) => {
  if (!valor) {
    return `o campo ${nomeCampo} é obrigatório`;
  }
  if (typeof valor !== "string") {
    return `o campo ${nomeCampo} aceita apenas string`;
  }
  if (valor.trim() === "") {
    return `o campo ${nomeCampo} não pode ter apenas espaço`;
  }

  return null
};

export default validarCampo