import type ICommand from "./command.ts";
import Pessoa from "./pessoa.ts";

export default class GetCommand implements ICommand {
  public pessoas: Pessoa[];

  constructor(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  async execute(...args: any[]): Promise<void> {
    const [id] = args;
    const pessoa = this.pessoas.find(p => p.id === id);
    console.log(`Pessoa:`, pessoa);
  }
}
