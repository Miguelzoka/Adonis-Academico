import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TurmasAluno from 'App/Models/TurmasAluno'

export default class extends BaseSeeder {
  public async run () {
    await TurmasAluno.createMany([
      {turmas_id: 1, alunos_id: 2}
      
    ])
  }
}
