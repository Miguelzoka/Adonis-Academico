import TurmasAluno from "App/Models/TurmasAluno";

export default class TurmasAlunosController {
  index() {
    return TurmasAluno.all();
  }

  store({ request }) {
    const dados = request.only(["turma_id", "aluno_id"]);
    return TurmasAluno.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return TurmasAluno.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await TurmasAluno.findOrFail(id);
    const dados = request.only(["turma_id", "aluno_id"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await TurmasAluno.findOrFail(id);
    return curso.delete();
  }
}
