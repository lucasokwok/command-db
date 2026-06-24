import type ICommand from "./command.ts";
import Pessoa from "./pessoa.ts";

export default class DeleteCommand implements ICommand {
  public pessoas: Pessoa[];

  constructor(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  async execute(...args: any[]): Promise<void> {
    const [id] = args;
    const index = this.pessoas.findIndex(p => p.id === id);
    if (index >= 0) {
      this.pessoas.splice(index, 1);
    }
  }
}
