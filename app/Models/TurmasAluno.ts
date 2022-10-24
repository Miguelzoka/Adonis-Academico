import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Aluno from "./Aluno";
import Turma from "./Turma";

export default class TurmasAluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public turma_id: number;

  @column()
  public aluno_id: number;

  @belongsTo (() => Aluno)
  public Alunos: BelongsTo<typeof Aluno>;

  @belongsTo (() => Turma)
  public Turmas: BelongsTo<typeof Turma>;
}
