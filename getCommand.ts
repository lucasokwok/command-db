import ICommand from "./command";
import Pessoa from "./pessoa";

export default class GetCommand implements ICommand {
  constructor(public pessoas: Pessoa[]) {}
  async execute(...args: any[]): Promise<void> {
    const [id] = args;
    const pessoa = this.pessoas.find(p => p.id === id);
    console.log(`Pessoa:`, pessoa);
  }
}
