import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Aula from "App/Models/Aula";

export default class extends BaseSeeder {
  public async run() {
    await Aula.createMany([
      { data: 7 / 21 / 22, conteudo: "backend", turma_id: 1 },
    ]);
  }
}
