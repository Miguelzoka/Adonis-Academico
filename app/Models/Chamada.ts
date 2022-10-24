import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Aula from "./Aula";
import Aluno from "./Aluno";

export default class Chamada extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public aula_id: number;

  @column()
  public alunos_id: number;

  @column()
  public presenca: number;

  @belongsTo (() => Aula)
  public Aulas: BelongsTo<typeof Aula>;

  @belongsTo (() => Aluno)
  public Alunos: BelongsTo<typeof Aluno>;
}
