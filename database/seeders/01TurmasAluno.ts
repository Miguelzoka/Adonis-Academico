import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import TurmasAluno from "App/Models/TurmasAluno";

export default class extends BaseSeeder {
  public async run() {
    await TurmasAluno.createMany([{ turma_id: 1, aluno_id: 1 }]);
  }
}
