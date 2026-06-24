import type ICommand from "./command.ts";
import Pessoa from "./pessoa.ts";

export default class NewCommand implements ICommand {
  public pessoas: Pessoa[];

  constructor(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  async execute(...args: any[]): Promise<void> {
    const [id, nome] = args;
    const newPessoa = new Pessoa(id, nome);
    this.pessoas.push(newPessoa);
    console.log(`Nova pessoa adicionada:`, newPessoa);
  }
}
