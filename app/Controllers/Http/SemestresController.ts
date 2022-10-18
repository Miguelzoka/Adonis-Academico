import Semestre from "App/Models/Semestre";

export default class SemestresController {
  index() {
    return Semestre.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "data_fim"]);
    return Semestre.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Semestre.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Semestre.findOrFail(id);
    const dados = request.only(["nome", "data_inicio", "data_fim"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Semestre.findOrFail(id);
    return curso.delete();
  }
}
