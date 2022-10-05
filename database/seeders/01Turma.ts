import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome: 'A', turma: '2', disciplinaId: 1, salaId: 1, professorId: 1, semestreId: 1}
      
    ])
  }
}
