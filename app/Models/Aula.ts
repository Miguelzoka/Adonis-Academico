import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Turma from "./Turma";
import Chamada from "./Chamada";

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public data: number;

  @column()
  public conteudo: string;

  @column()
  public turma_id: number;

  @belongsTo (() => Turma)
  public Turmas: BelongsTo<typeof Turma>;

  @hasMany (() => Chamada)
  public Chamadas: HasMany<typeof Chamada>;
}
