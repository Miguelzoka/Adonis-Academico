import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Curso from "./Curso";

export default class Disciplina extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public nome: string;

  @column()
  public cursoId: number;

  @belongsTo(() => Curso)
  public cursos: BelongsTo<typeof Curso>;
}
