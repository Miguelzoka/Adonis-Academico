import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome: 'Carlos', CPF: 4, matricula: 22, salario: 3000, email: 'gmail', telefone: 61, cep: 34, logradouro: 'cei',
      complemento: 'pnorte', numero: 1, bairro: 'cei'}
      
    ])
  }
}
