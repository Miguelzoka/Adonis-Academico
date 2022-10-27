import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class DisciplinasController {
  index() {
    return Disciplina.all();
  }

  show({ request }) {
    const id = request.param("id");
    return Disciplina.findOrFail(id);
  }

 async store({ request }) {
    const dados = await request.validate(DisciplinaValidator)
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
