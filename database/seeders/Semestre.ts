import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Semestre from "App/Models/Semestre";

export default class extends BaseSeeder {
  public async run() {
    await Semestre.createMany([
      { nome: "segundo", data_inicio: "junho", data_fim: "dezembro" },
    ]);
  }
}
