import Chamada from "App/Models/Chamada";

export default class ChamadasController {
  index() {
    return Chamada.all();
  }

  store({ request }) {
    const dados = request.only(["preseca", "alunos_id"]);
    return Chamada.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Chamada.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Chamada.findOrFail(id);
    const dados = request.only(["aula_id", "alunos_id"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Chamada.findOrFail(id);
    return curso.delete();
  }
}
