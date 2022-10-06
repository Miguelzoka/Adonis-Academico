import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public professorId: number;

  @column()
  public salaId: number;

  @column()
  public nome: string;

  @column()
  public turma: string;

  @column()
  public semestreId: number;

  @column()
  public disciplinaId: number;
}
