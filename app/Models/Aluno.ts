import { DateTime } from "luxon";
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import Chamada from "./Chamada";
import Turma from "./Turma";

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public nome: string;

  @column()
  public cpf: number;

  @column()
  public email: string;

  @column()
  public telefone: number;

  @column()
  public cep: number;

  @column()
  public logradouro: string;

  @column()
  public complemento: string;

  @column()
  public numero: number;

  @column()
  public bairro: string;

  @column()
  public matricula: string;

  @hasMany(() => Chamada)
  public Chamadas: HasMany<typeof Chamada>;

  @manyToMany(() => Turma, {pivotTable: 'TurmasAluno'})
  public turmas: ManyToMany<typeof Turma>
}
