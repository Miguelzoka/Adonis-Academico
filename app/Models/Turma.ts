import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Aula from "./Aula";
import TurmasAluno from "./TurmasAluno";
import Professor from "./Professor";
import Semestre from "./Semestre";
import Sala from "./Sala";
import Disciplina from "./Disciplina";

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

  @hasMany (() => Aula)
  public Aulas: HasMany<typeof Aula>;

  @hasMany (() => TurmasAluno)
  public TurmasAlunos: HasMany<typeof TurmasAluno>;

  @belongsTo (() => Professor)
  public Professores: BelongsTo<typeof Professor>;

  @belongsTo (() => Semestre)
  public Semestres: BelongsTo<typeof Semestre>;

  @belongsTo (() => Sala)
  public Salas: BelongsTo<typeof Sala>;

  @belongsTo (() => Disciplina)
  public Disciplinas: BelongsTo<typeof Disciplina>;
}
