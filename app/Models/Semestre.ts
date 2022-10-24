import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Turma from "./Turma";

export default class Semestre extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public nome: string;

  @column()
  public data_inicio: string;

  @column()
  public data_fim: string;

  @hasMany (() => Turma)
  public Turmas: HasMany<typeof Turma>;
}
