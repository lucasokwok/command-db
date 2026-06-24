import ICommand from "./command";
import Pessoa from "./pessoa";

export default class NewCommand implements ICommand {
  constructor(public pessoas: Pessoa[]) {}
  async execute(...args: any[]): Promise<void> {
    const [id, nome] = args;
    const newPessoa = new Pessoa(id, nome);
    this.pessoas.push(newPessoa);
    console.log(`Nova pessoa adicionada:`, newPessoa);
  }
}
