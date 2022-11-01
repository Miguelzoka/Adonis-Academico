import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alphaNum(),
      rules.unique({ table: "cursos", column: "nome" }),
    ]),
    duracao: schema.number.optional(),
    modalidade: schema.enum(["P", "E", "H"]),
  });

  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório',
    unique: 'Já existe um registro com o mesmo valor',
  }
}
