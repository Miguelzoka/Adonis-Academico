import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/cursos', 'CursosController').apiOnly()
Route.resource('/disciplinas', 'DisciplinasController').apiOnly()
