import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Chamada from "App/Models/Chamada";

export default class extends BaseSeeder {
  public async run() {
    await Chamada.createMany([{ aula_id: 1, alunos_id: 1, presenca: 1 }]);
  }
}
