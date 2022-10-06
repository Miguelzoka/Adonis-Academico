import Disciplina from "App/Models/Disciplina";

export default class DisciplinasController {
  index() {
    return Disciplina.all();
  }

  show({ request }) {
    const id = request.param("id");
    return Disciplina.findOrFail(id);
  }

  store({ request }) {
    const dados = request.only(["nome", "cursoId"]);
    return Disciplina.create(dados);
  }

  async update({ request }) {
    const id = request.param("id");
    const disciplina = await Disciplina.findOrFail(id);
    const dados = request.only(["nome", "cursoId"]);
    return disciplina.merge(dados).save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const disciplina = await Disciplina.findOrFail(id);
    return disciplina.delete();
  }
}
