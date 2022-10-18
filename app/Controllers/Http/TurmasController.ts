import Turma from "App/Models/Turma";

export default class TurmasController {
  index() {
    return Turma.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "sala_id"]);
    return Turma.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Turma.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Turma.findOrFail(id);
    const dados = request.only(["nome", "professor_id", "turma"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Turma.findOrFail(id);
    return curso.delete();
  }
}
