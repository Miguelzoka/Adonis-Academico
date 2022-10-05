import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome: 'Miguel', cpf: 5, email: 'gmail', matricula: '123', telefone: 61, cep: 722, 
      logradouro: 'borges', complemento: 'setor o', numero: 12, bairro: 'cei'},
    ]) 
  }
}
 