import Professor from "App/Models/Professor";

export default class ProfessorsController {
  index() {
    return Professor.all();
  }

  store({ request }) {
    const dados = request.only(["nome", "cpf"]);
    return Professor.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Professor.findOrFail(id);
  }

  async Update({ request }) {
    const id = request.param("id");
    const curso = await Professor.findOrFail(id);
    const dados = request.only(["matricula", "email", "telefone"]);
    curso.merge(dados);
    return curso.save();
  }

  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Professor.findOrFail(id);
    return curso.delete();
  }
}
