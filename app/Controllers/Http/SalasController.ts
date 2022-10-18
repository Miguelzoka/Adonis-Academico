import Sala from "App/Models/Sala";

export default class SalasController {
  index() {
    return Sala.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "capacidade"]);
    return Sala.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Sala.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Sala.findOrFail(id);
    const dados = request.only(["nome", "capacidade", "tipo"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Sala.findOrFail(id);
    return curso.delete();
  }
}
