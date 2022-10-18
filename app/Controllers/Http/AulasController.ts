import Aula from "App/Models/Aula";

export default class AulasController {
  index() {
    return Aula.all();
  }

  store({ request }) {
    const dados = request.only(["data", "conteudo"]);
    return Aula.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Aula.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Aula.findOrFail(id);
    const dados = request.only(["data", "turma_id"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Aula.findOrFail(id);
    return curso.delete();
  }
}
