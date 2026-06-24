import ICommand from "./command";
import Pessoa from "./pessoa";

export default class DeleteCommand implements ICommand {
  constructor(public pessoas: Pessoa[]) {}
  async execute(...args: any[]): Promise<void> {
    const [id] = args;
    const newPessoas = this.pessoas.filter(p => p.id !== id);
    this.pessoas = newPessoas;
  
  }
}