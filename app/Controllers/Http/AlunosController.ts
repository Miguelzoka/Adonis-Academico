import Aluno from "App/Models/Aluno";

export default class AlunosController {
  index() {
    return Aluno.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "cpf"]);
    return Aluno.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Aluno.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Aluno.findOrFail(id);
    const dados = request.only(["nome", "telefone", "cep"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Aluno.findOrFail(id);
    return curso.delete();
  }
}
