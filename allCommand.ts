import type ICommand from "./command.ts";
import type Pessoa from "./pessoa.ts";

export default class AllCommand implements ICommand {
  public pessoas: Pessoa[];

  constructor(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
  }

  async execute(...args: any[]): Promise<void> {
    console.log(`Pessoas:`, this.pessoas);
  }
}
